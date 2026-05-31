import { z } from 'zod';

export const RoleEnum = z.enum(['USER', 'MERCHANT', 'ADMIN']);

// Step 1: Initial registration (collect details)
export const initiateRegisterSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email('Invalid email address'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  password: z.string().min(6).max(100),
  role: RoleEnum.default('USER'),
});

// Step 2: Verify both OTPs
export const verifyOtpSchema = z.object({
  email: z.string().email(),
  mobile: z.string().regex(/^[6-9]\d{9}$/),
  emailOtp: z.string().length(6, 'Email OTP must be 6 digits'),
  mobileOtp: z.string().length(6, 'Mobile OTP must be 6 digits'),
});

// Login
export const loginSchema = z.object({
  email: z.string().email().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/).optional(),
  password: z.string(),
}).refine(data => data.email || data.mobile, {
  message: "Either email or mobile is required",
});


export const forgotPasswordSchema = z.object({
  email: z.string().email().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/).optional(),
}).refine(data => data.email || data.mobile, {
  message: "Either email or mobile is required",
});

export const resetPasswordSchema = z.object({
  email: z.string().email().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/).optional(),
  otp: z.string().length(6, 'OTP must be 6 digits'),
  newPassword: z.string().min(6).max(100),
}).refine(data => data.email || data.mobile, {
  message: "Either email or mobile is required",
});

export const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(6).max(100),
});

// Refresh token
export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10, 'Invalid refresh token'),
});

export type InitiateRegisterInput = z.infer<typeof initiateRegisterSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;