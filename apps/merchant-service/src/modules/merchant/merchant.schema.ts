import { z } from 'zod';

// ─────────────────────────────────────────────
// ENUMS MAPPING (Strictly matching Prisma Enums)
// ─────────────────────────────────────────────
const BusinessTypeEnum = z.enum(['SOLE_PROPRIETORSHIP', 'REGISTERED_COMPANY', 'INDIVIDUAL_TRADER']);
const KycStatusEnum = z.enum(['PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED']);

// ─────────────────────────────────────────────
// MERCHANT ONBOARDING / KYC VALIDATION
// ─────────────────────────────────────────────
export const onboardSchema = z.object({
  // 🔑 Shared Identification Link with Auth Service
  userId: z.string().uuid({ message: "Invalid User ID format" }),

  // 🏛️ Nigeria Central Bank Strict KYC Requirements
  bvn: z.string()
    .length(11, { message: "BVN must be exactly 11 digits" })
    .regex(/^[0-9]+$/, { message: "BVN must contain only numbers" }),
  
  nin: z.string()
    .length(11, { message: "NIN must be exactly 11 digits" })
    .regex(/^[0-9]+$/, { message: "NIN must contain only numbers" })
    .optional()
    .or(z.literal('')), // Optional banaya hai agar sirf BVN pehle stage par le rahe ho

  // Mandatory for REGISTERED_COMPANY, field optional rakha hai conditionally validation handle karne ke liye
  cacNumber: z.string()
    .min(3, { message: "Invalid CAC number format" })
    .optional()
    .or(z.literal('')),

  // 🏢 Business Info
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters" }).max(100),
  businessType: BusinessTypeEnum,
  description: z.string().max(500).optional(),

  // 👤 Owner Info (Must match BVN data exactly)
  ownerName: z.string().min(2, { message: "Owner name is required" }),
  ownerDob: z.string().datetime({ message: "Invalid Date of Birth format (ISO string required)" }),

  // 📧 Contact
  email: z.string().email({ message: "Invalid email address" }),
  
  // Nigeria Phone Format Support: Handle local (0803...) and international (+234...)
  mobile: z.string()
    .regex(/^(?:\+234|234|0)[789][01]\d{8}$/, { 
      message: "Invalid Nigerian mobile number format. Use 080... or +234..." 
    }),

  // 🏠 Address
  addressLine1: z.string().min(5, { message: "Valid address is required" }),
  addressLine2: z.string().optional(),
  addressCity: z.string().min(2),
  addressState: z.string().min(2), // e.g., "Lagos", "Abuja"
  addressCountry: z.string().default("Nigeria"),

  // 🏦 Bank Details (NUBAN Specification)
  bankCode: z.string().length(3, { message: "Bank code must be exactly 3 digits" }),
  accountNumber: z.string().length(10, { message: "NUBAN Account number must be exactly 10 digits" }),
  accountName: z.string().min(2, { message: "Account name is required" }),
});

// ─────────────────────────────────────────────
// NIBSS / THIRD-PARTY KYC CALLBACK VALIDATION
// ─────────────────────────────────────────────
export const nibssCallbackSchema = z.object({
  merchantId: z.string().uuid({ message: "Invalid Merchant ID" }),
  nibssId: z.string().min(1, { message: "NIBSS ID is required" }),
  status: KycStatusEnum,
  rejectionReason: z.string().optional(),
});

export type OnboardInput = z.infer<typeof onboardSchema>;
export type NibssCallbackInput = z.infer<typeof nibssCallbackSchema>;