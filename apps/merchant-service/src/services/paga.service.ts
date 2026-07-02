import crypto from 'crypto';
import axios, { AxiosError } from 'axios';

// ─────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────
const PAGA_BASE_URL = process.env.PAGA_BASE_URL || 
  'https://www.mypaga.com/paga-webservices/business-rest/secured';
const PAGA_PRINCIPAL = process.env.PAGA_PRINCIPAL || 'A42D872B-505B-4CC4-BC6E-7FB235B001A5';
const PAGA_CREDENTIAL = process.env.PAGA_CREDENTIAL || 'dS2%d*W=89ZNeGq'; 
const PAGA_HASH_KEY = process.env.PAGA_HASH_KEY || 
  '35e9225ea30442ca894474da45fc992e5b027df87a8c413aac0e5d3b3d88a8b813d442717bcf4a6bba95eadea6442ee786f086fb22284b5ba81ce184682e45d2';

// ─────────────────────────────────────────────
// TYPES (Strictly aligned with your new OnboardInput)
// ─────────────────────────────────────────────
export interface OnboardMerchantInput {
  merchantId: string;      // This is internal DB primary uuid
  businessName: string;
  businessType: string;
  ownerName: string;
  email: string;
  mobile: string;
  bvn: string;            // Added for regulatory hashing compliance if needed by Paga setup
  accountNumber: string;  // Added NUBAN parameter
  bankCode: string;       // Added Bank routing identifier
  ownerDob: string;       // ISO string format passed from updated Zod input
  addressLine1: string;   // Flat values passed directly from new schema layout
  addressLine2?: string | null;
  addressCity: string;
  addressState: string;
  addressCountry: string;
}

interface PagaOnboardRequest {
  reference: string;
  merchantExternalId: string;
  merchantInfo: {
    legalEntity: {
      name: string;
      description: string;
      addressLine1: string;
      addressLine2?: string;
      addressCity: string;
      addressState: string;
      addressCountry: string;
    };
    legalEntityRepresentative: {
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      phone: string;
      email: string;
    };
    additionalParameters?: {
      displayName?: string;
      bankCode?: string;         // Highly recommended metadata for payout reconciliation
      accountNumber?: string;
      bvn?: string;
    };
  };
  integration?: {
    type: 'EMAIL_NOTIFICATION' | 'MERCHANT_NOTIFICATION_REVERSE_API';
    financeAdminEmail?: string;
  };
}

interface PagaResponse {
  responseCode: number;
  message: string;
  referenceNumber?: string;
  [key: string]: any;
}

// ─────────────────────────────────────────────
// SERVICE CLASS
// ─────────────────────────────────────────────
export class PagaService {
  
  /**
   * Generate SHA-512 hash for Paga authentication
   * Format: referenceNumber + merchantExternalId + name + phone + email + hashKey
   */
  private generateHash(params: {
    referenceNumber: string;
    merchantExternalId: string;
    name: string;
    phone: string;
    email: string;
  }): string {
    const hashString =
      params.referenceNumber +
      params.merchantExternalId +
      params.name +
      params.phone +
      params.email +
      PAGA_HASH_KEY;

    return crypto.createHash('sha512').update(hashString).digest('hex');
  }

  private generateReference(): string {
    return `PAGA-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  }

  private async makeRequest<T>(
    endpoint: string,
    body: Record<string, any>,
    hashParams?: {
      referenceNumber: string;
      merchantExternalId: string;
      name: string;
      phone: string;
      email: string;
    }
  ): Promise<T> {
    const url = `${PAGA_BASE_URL}/${endpoint}`;
    console.log("this url hits", url);
    

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      principal: PAGA_PRINCIPAL,
      credentials: PAGA_CREDENTIAL,
    };

    if (hashParams) {
      headers.hash = this.generateHash(hashParams);
    }

    try {
      const response = await axios.post<T>(url, body, { headers, timeout: 30000 });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('❌ Paga API Error:', {
          endpoint,
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
        throw new PagaApiError(
          error.response?.data?.message || error.message,
          error.response?.status,
          error.response?.data
        );
      }
      throw error;
    }
  }

  /**
   * 🚀 Onboard merchant on Paga
   */
  async onboardMerchant(data: OnboardMerchantInput): Promise<{
    success: boolean;
    reference: string;
    pagaResponse?: PagaResponse;
    pagaMerchantId?: string;
    error?: string;
  }> {
    const reference = this.generateReference();

    // Split ownerName safely
    const nameParts = data.ownerName.trim().split(/\s+/);
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts.slice(1).join(' ') || firstName;

    // ISO timestamp alignment check
    let formattedDob = '1990-01-01T00:00:00.000+01:00';
    if (data.ownerDob) {
      // Input formats directly from ISO strings handled cleanly
      formattedDob = data.ownerDob.includes('T') ? data.ownerDob : `${data.ownerDob}T00:00:00.000+01:00`;
    }

    const onboardData: PagaOnboardRequest = {
      reference,
      merchantExternalId: data.merchantId,
      merchantInfo: {
        legalEntity: {
          name: data.businessName,
          description: data.businessType,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || undefined,
          addressCity: data.addressCity,
          addressState: data.addressState,
          addressCountry: data.addressCountry,
        },
        legalEntityRepresentative: {
          firstName,
          lastName,
          dateOfBirth: formattedDob,
          phone: data.mobile,
          email: data.email,
        },
        additionalParameters: {
          displayName: data.businessName,
          bankCode: data.bankCode,
          accountNumber: data.accountNumber,
          bvn: data.bvn
        },
      },
      integration: {
        type: 'EMAIL_NOTIFICATION',
        financeAdminEmail: data.email,
      },
    };

    try {
      const result = await this.makeRequest<PagaResponse>(
        'registerCustomer',
        onboardData,
        {
          referenceNumber: reference,
          merchantExternalId: data.merchantId,
          name: data.businessName,
          phone: data.mobile,
          email: data.email,
        }
      );

      // Response code 0 = Success standard on Paga endpoints
      const isSuccess = result.responseCode === 0;

      return {
        success: isSuccess,
        reference,
        pagaResponse: result,
        pagaMerchantId: result.referenceNumber, 
        error: isSuccess ? undefined : result.message,
      };
    } catch (error) {
      return {
        success: false,
        reference,
        error: error instanceof Error ? error.message : 'Unknown Paga pipeline crash',
      };
    }
  }

  /**
   * 📊 Check operation status by reference
   */
  async getOperationStatus(referenceNumber: string): Promise<PagaResponse> {
    const hash = crypto
      .createHash('sha512')
      .update(referenceNumber + PAGA_HASH_KEY)
      .digest('hex');

    const url = `${PAGA_BASE_URL}/getOperationStatus`;
    
    const response = await axios.post<PagaResponse>(
      url,
      { referenceNumber, locale: 'en' },
      {
        headers: {
          'Content-Type': 'application/json',
          principal: PAGA_PRINCIPAL,
          credentials: PAGA_CREDENTIAL,
          hash,
        },
        timeout: 15000,
      }
    );

    return response.data;
  }

  /**
   * 🏦 Get list of Nigerian banks
   */
  async getBanks(): Promise<any> {
    const reference = this.generateReference();
    const hashInput = reference + PAGA_HASH_KEY;
    const hash = crypto.createHash('sha512').update(hashInput).digest('hex');

    const url = `${PAGA_BASE_URL}/getBanks`;
    
    const response = await axios.post(
      url,
      { referenceNumber: reference, locale: 'en' },
      {
        headers: {
          'Content-Type': 'application/json',
          principal: PAGA_PRINCIPAL,
          credentials: PAGA_CREDENTIAL,
          hash,
        },
        timeout: 15000,
      }
    );

    return response.data;
  }

  /**
   * 💰 Get merchant balance (after merchant is active)
   */
  async getMerchantBalance(merchantId: string, referenceNumber: string): Promise<any> {
    const hash = crypto
      .createHash('sha512')
      .update(referenceNumber + merchantId + PAGA_HASH_KEY)
      .digest('hex');

    const url = `${PAGA_BASE_URL}/getMerchantAccountBalance`;
    
    const response = await axios.post(
      url,
      { referenceNumber, merchantId, locale: 'en' },
      {
        headers: {
          'Content-Type': 'application/json',
          principal: PAGA_PRINCIPAL,
          credentials: PAGA_CREDENTIAL,
          hash,
        },
        timeout: 15000,
      }
    );

    return response.data;
  }
}

// ─────────────────────────────────────────────
// CUSTOM ERROR CLASS
// ─────────────────────────────────────────────
export class PagaApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public responseData?: any
  ) {
    super(message);
    this.name = 'PagaApiError';
  }
}

// Singleton export
export const pagaService = new PagaService();