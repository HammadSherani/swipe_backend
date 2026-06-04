import { OnboardInput } from './merchant.schema.js';
import { NotFoundError, BadRequestError } from '../../errors/custom-errors.js';
import { prisma } from '../../config/database.js';
import { MerchantStatus } from '@prisma/client';
import { pagaService } from '@/services/paga.service.js';

export class MerchantService {


  // NEW CODE

  /**
   * 🚀 Main onboarding flow
   */
  async onboard(userId: string, data: OnboardInput) {
    // ── Step 1: Check if already onboarded ──
    const existing = await prisma.merchant.findUnique({ where: { userId } });
    if (existing) {
      throw new BadRequestError('Merchant already onboarded');
    }

    // ── Step 2: Check email/mobile uniqueness ──
    const emailExists = await prisma.merchant.findUnique({
      where: { email: data.email }
    });
    if (emailExists) {
      throw new BadRequestError('Email already registered');
    }

    const mobileExists = await prisma.merchant.findUnique({
      where: { mobile: data.mobile }
    });
    if (mobileExists) {
      throw new BadRequestError('Mobile number already registered');
    }

    // ── Step 3: Create merchant in DB (PENDING status) ──
    const merchant = await prisma.merchant.create({
      data: {
        userId,
        businessName: data.businessName,
        businessType: data.businessType,
        ownerName: data.ownerName,
        email: data.email,
        mobile: data.mobile,
        bankCode: data.bankCode,
        accountNumber: data.accountNumber,
        accountName: data.accountName,
        status: 'PENDING',
        isVerified: false,
      },
    });

    // ── Step 4: Call Paga API ──
    try {
      const pagaResult = await pagaService.onboardMerchant({
        merchantId: merchant.id,
        businessName: data.businessName,
        businessType: data.businessType,
        ownerName: data.ownerName,
        email: data.email,
        mobile: data.mobile,
        // address: data.address,
        // ownerDob: data.ownerDob,
      });

      if (!pagaResult.success) {
        // Paga onboarding failed → mark as REJECTED
        await prisma.merchant.update({
          where: { id: merchant.id },
          data: { status: 'REJECTED' },
        });

        throw new BadRequestError(
          `Paga onboarding failed: ${pagaResult.error || 'Unknown error'}`
        );
      }

      // ── Step 5: Success! Update with Paga reference ──
      // Paga returns merchant ID in referenceNumber field
      const updatedMerchant = await prisma.merchant.update({
        where: { id: merchant.id },
        data: {
          status: 'ACTIVE', // Or keep PENDING if Paga needs manual approval
          nibssId: pagaResult.pagaMerchantId || pagaResult.reference,
          isVerified: true,
        },
      });

      return {
        success: true,
        merchantId: updatedMerchant.id,
        pagaReference: pagaResult.reference,
        pagaMerchantId: pagaResult.pagaMerchantId,
        message: 'Merchant onboarded successfully on Paga.',
        status: updatedMerchant.status,
      };

    } catch (error) {
      // If it's already a BadRequestError, re-throw
      if (error instanceof BadRequestError) throw error;

      // Unexpected error → mark as REJECTED
      await prisma.merchant.update({
        where: { id: merchant.id },
        data: { status: 'REJECTED' },
      });

      console.error('Onboarding error:', error);
      throw new BadRequestError(
        `Onboarding failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * 📊 Check merchant onboarding status on Paga
   */
  // async checkPagaStatus(merchantId: string) {
  //   const merchant = await prisma.merchant.findUnique({
  //     where: { id: merchantId },
  //   });

  //   if (!merchant) {
  //     throw new BadRequestError('Merchant not found');
  //   }

  //   if (!merchant.nibssId) {
  //     return {
  //       merchantId: merchant.id,
  //       status: merchant.status,
  //       pagaStatus: null,
  //       message: 'No Paga reference found. Merchant may not be onboarded yet.',
  //     };
  //   }

  //   try {
  //     const pagaStatus = await pagaService.getOperationStatus(merchant.nibssId);

  //     // Update status based on Paga response
  //     let newStatus: MerchantStatus = merchant.status;

  //     if (pagaStatus.responseCode === 0) {
  //       // Success - merchant is active
  //       if (merchant.status !== 'ACTIVE') {
  //         newStatus = 'ACTIVE';
  //       }
  //     } else if (pagaStatus.responseCode === -1) {
  //       // Pending/Processing
  //       newStatus = 'PENDING';
  //     } else {
  //       // Failed/Rejected
  //       newStatus = 'REJECTED';
  //     }

  //     // Update DB if status changed
  //     if (newStatus !== merchant.status) {
  //       await prisma.merchant.update({
  //         where: { id: merchant.id },
  //         data: { 
  //           status: newStatus,
  //           isVerified: newStatus === 'ACTIVE',
  //         },
  //       });
  //     }

  //     return {
  //       merchantId: merchant.id,
  //       status: newStatus,
  //       pagaStatus,
  //       isVerified: newStatus === 'ACTIVE',
  //     };

  //   } catch (error) {
  //     return {
  //       merchantId: merchant.id,
  //       status: merchant.status,
  //       error: error instanceof Error ? error.message : 'Failed to check status',
  //     };
  //   }
  // }

  /**
   * 🏦 Get list of banks (for dropdown in frontend)
   */
  async getBanks() {
    return pagaService.getBanks();
  }

  /**
   * 💰 Get merchant balance from Paga
   */
  async getBalance(merchantId: string) {
    const merchant = await prisma.merchant.findUnique({
      where: { id: merchantId },
    });

    if (!merchant || !merchant.nibssId) {
      throw new BadRequestError('Merchant not found or not onboarded on Paga');
    }

    const reference = `BAL-${Date.now()}`;
    return pagaService.getMerchantBalance(merchant.nibssId, reference); 
  }

  // NEW CODE

  // async onboard(userId: string, data: OnboardInput) {
  //   // Check existing
  //   const existing = await prisma.merchant.findUnique({ where: { userId } });
  //   if (existing) throw new BadRequestError('Merchant already onboarded');

  //   // Create merchant
  //   const merchant = await prisma.merchant.create({
  //     data: {
  //       userId,
  //       businessName: data.businessName,
  //       businessType: data.businessType,
  //       ownerName: data.ownerName,
  //       email: data.email,
  //       mobile: data.mobile,
  //       bankCode: data.bankCode,
  //       accountNumber: data.accountNumber,
  //       accountName: data.accountName,
  //       status: 'PENDING',
  //     },
  //   });

  //   // TODO: Call NIBSS API
  //   // await nibssApi.onboard(merchant);

  //   return {
  //     merchantId: merchant.id,
  //     message: 'Onboarding initiated. Pending NIBSS verification.',
  //   };
  // }

  async getByUserId(userId: string) {
    const merchant = await prisma.merchant.findUnique({
      where: { userId },
      include: { qrCodes: true, paymentLinks: true },
    });

    if (!merchant) throw new NotFoundError('Merchant not found');
    return merchant;
  }


  async updateNibssStatus(merchantId: string, nibssId: string, status: string) {
    const merchantStatus: MerchantStatus = status === 'APPROVED' ? 'ACTIVE' : 'REJECTED';

    const merchant = await prisma.merchant.update({
      where: { id: merchantId },
      data: {
        nibssId,
        status: merchantStatus,  // ✅ Type safe
      },
    });

    return merchant;
  }
}