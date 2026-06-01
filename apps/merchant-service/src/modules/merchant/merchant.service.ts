import { OnboardInput } from './merchant.schema.js';
import { NotFoundError, BadRequestError } from '../../errors/custom-errors.js';
import { prisma } from '../../config/database.js';
import { MerchantStatus } from '@prisma/client';

export class MerchantService {
  async onboard(userId: string, data: OnboardInput) {
    // Check existing
    const existing = await prisma.merchant.findUnique({ where: { userId } });
    if (existing) throw new BadRequestError('Merchant already onboarded');

    // Create merchant
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
      },
    });

    // TODO: Call NIBSS API
    // await nibssApi.onboard(merchant);

    return {
      merchantId: merchant.id,
      message: 'Onboarding initiated. Pending NIBSS verification.',
    };
  }

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