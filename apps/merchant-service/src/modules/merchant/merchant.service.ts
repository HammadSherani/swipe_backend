import { OnboardInput } from './merchant.schema.js';
import { NotFoundError, BadRequestError } from '../../errors/custom-errors.js';
import { prisma } from '../../config/database.js';
import { MerchantStatus } from '@prisma/client';
import { pagaService } from '@/services/paga.service.js';

export class MerchantService {


  // NEW CODE


  async initializeProfile(merchantId: string) {
    const existing = await prisma.merchant.findUnique({
      where: { userId: merchantId }
    });

    if (existing) {
      return existing;
    }


    return await prisma.merchant.create({
      data: {
        userId: merchantId,
        businessName: "Pending Onboarding",
        businessType: "SOLE_PROPRIETORSHIP",
        ownerName: "Pending Onboarding",
        email: `pending-${merchantId}@temporary.com`,
        mobile: `pending-${merchantId}`,
        bankCode: "000",
        accountNumber: "0000000000",
        accountName: "Pending Verification",
        status: 'PENDING',
        kycStatus: 'PENDING',
        isActive: false
      }
    });
  }

  /**
   * 🚀 Main onboarding flow
   */
  async onboard(userId: string, data: OnboardInput) {
    const merchant = await prisma.merchant.findUnique({ where: { userId } });
    if (!merchant) {
      throw new NotFoundError('Merchant baseline profile not found. Please register first.');
    }

    if (merchant.kycStatus === 'APPROVED' || merchant.status === 'ACTIVE') {
      throw new BadRequestError('Merchant is already verified and active.');
    }

    // ── Step 2: Check email/mobile/BVN uniqueness strictly excluding current record ──
    const emailExists = await prisma.merchant.findFirst({
      where: { email: data.email, NOT: { userId } }
    });
    if (emailExists) throw new BadRequestError('Email already registered by another merchant');

    const mobileExists = await prisma.merchant.findFirst({
      where: { mobile: data.mobile, NOT: { userId } }
    });
    if (mobileExists) throw new BadRequestError('Mobile number already registered by another merchant');

    const bvnExists = await prisma.merchant.findFirst({
      where: { bvn: data.bvn, NOT: { userId } }
    });
    if (bvnExists) throw new BadRequestError('BVN already linked to another merchant account');


    const updatedDraft = await prisma.merchant.update({
      where: { userId },
      data: {
        bvn: data.bvn,
        nin: data.nin || null,
        cacNumber: data.cacNumber || null,
        businessName: data.businessName,
        businessType: data.businessType,
        ownerName: data.ownerName,
        ownerDob: new Date(data.ownerDob),
        email: data.email,
        mobile: data.mobile,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2 || null,
        addressCity: data.addressCity,
        addressState: data.addressState,
        bankCode: data.bankCode,
        accountNumber: data.accountNumber,
        accountName: data.accountName,
        kycStatus: 'UNDER_REVIEW', // Status changes to review phase
      },
    });

      //  return {
      //   success: true,
      //   // merchantId: activeMerchant.id,
      //   // pagaReference: pagaResult.reference,
      //   message: 'Merchant onboarded and verified successfully on Paga network.',
      //   // status: activeMerchant.status,
      //   // kycStatus: activeMerchant.kycStat
      //   // us
      //   merchant: updatedDraft
      // };

    try {
      const pagaResult = await pagaService.onboardMerchant({
        merchantId: updatedDraft.id,
        businessName: data.businessName,
        businessType: data.businessType,
        ownerName: data.ownerName,
        ownerDob: data.ownerDob,            // 👈 Mandatory field added
        email: data.email,
        mobile: data.mobile,
        bvn: data.bvn,
        accountNumber: data.accountNumber,
        bankCode: data.bankCode,
        addressLine1: data.addressLine1,    // 👈 Mandatory address layers synced
        addressLine2: data.addressLine2,
        addressCity: data.addressCity,
        addressState: data.addressState,
        addressCountry: data.addressCountry || 'Nigeria',
      });

      if (!pagaResult.success) {
        await prisma.merchant.update({
          where: { id: updatedDraft.id },
          data: {
            status: 'REJECTED',
            kycStatus: 'REJECTED',
            rejectionReason: pagaResult.error || 'Paga validation failed'
          },
        });

        throw new BadRequestError(
          `Paga validation failed: ${pagaResult.error || 'Unknown regulatory error'}`
        );
      }

      // ── Step 5: Success! Update with Paga/NIBSS references and activate ──
      const activeMerchant = await prisma.merchant.update({
        where: { id: updatedDraft.id },
        data: {
          status: 'ACTIVE',
          kycStatus: 'APPROVED',
          pagaReference: pagaResult.reference,
          nibssId: pagaResult.pagaMerchantId || pagaResult.reference,
          isActive: true, // Transaction flow is now unlocked
        },
      });

      return {
        success: true,
        merchantId: activeMerchant.id,
        pagaReference: pagaResult.reference,
        message: 'Merchant onboarded and verified successfully on Paga network.',
        status: activeMerchant.status,
        kycStatus: activeMerchant.kycStatus
      };

    } catch (error) {
      // Agar pehle hi custom local handled error hai (jaise bad request), directly re-throw karo
      if (error instanceof BadRequestError || error instanceof NotFoundError) throw error;

      // Network drop ya unhandled integration exceptions par runtime fallback mechanism
      await prisma.merchant.update({
        where: { id: updatedDraft.id },
        data: {
          status: 'REJECTED',
          kycStatus: 'REJECTED',
          rejectionReason: error instanceof Error ? error.message : 'System integration failure'
        },
      });

      console.error('Fatal Onboarding Integration Error:', error);
      throw new BadRequestError(
        `Onboarding pipeline failed: ${error instanceof Error ? error.message : 'Unknown integration error'}`
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