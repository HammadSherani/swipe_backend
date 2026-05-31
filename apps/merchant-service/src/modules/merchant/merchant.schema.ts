import { z } from 'zod';

export const onboardSchema = z.object({
  businessName: z.string().min(2).max(100),
  businessType: z.string().min(2),
  ownerName: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().regex(/^[0-9]{11}$/), // Nigerian mobile
  bankCode: z.string().length(3),
  accountNumber: z.string().min(10).max(10),
  accountName: z.string().min(2),
});

export const nibssCallbackSchema = z.object({
  merchantId: z.string(),
  nibssId: z.string(),
  status: z.enum(['APPROVED', 'REJECTED']),
});

export type OnboardInput = z.infer<typeof onboardSchema>;
export type NibssCallbackInput = z.infer<typeof nibssCallbackSchema>;