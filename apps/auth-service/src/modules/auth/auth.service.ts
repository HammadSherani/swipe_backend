import { FastifyInstance } from 'fastify';
import bcrypt from 'bcryptjs';
import { env } from '../../config/env.js';
import { generateOtp } from '../../utils/otp.js';
import { storeOtp, getOtp, deleteOtp, storeSession, getSession, deleteSession } from '../../config/redis.js';
import { checkOtpRateLimit } from '../../config/rate-limit.js';
import {
  BadRequestError,
  UnauthorizedError,
  TooManyRequestsError,
  NotFoundError
} from '../../errors/custom-errors.js';
import { InitiateRegisterInput, VerifyOtpInput, LoginInput, ForgotPasswordInput, ResetPasswordInput, ChangePasswordInput } from './auth.schema.js';
import { prisma } from '../../config/database.js';
import { sendOtpEmail, sendPasswordResetEmail } from '../../services/email.service.js';

export class AuthService {
  constructor(private fastify: FastifyInstance) { }

  // ========== STEP 1: Initiate Registration ==========
  async initiateRegistration(data: InitiateRegisterInput) {
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { mobile: data.mobile }],
      },
    });

    if (existingUser) {
      throw new BadRequestError(
        'User with this email or mobile already exists'
      );
    }

    // Check pending registration
    const existingPending = await prisma.pendingRegistration.findFirst({
      where: {
        OR: [{ email: data.email }, { mobile: data.mobile }],
      },
    });

    // Active OTP already exists → resend OTP
    if (existingPending && existingPending.expiresAt > new Date()) {
      const newEmailOtp = generateOtp();
      const newMobileOtp = generateOtp();
      const newExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

      await prisma.pendingRegistration.update({
        where: { id: existingPending.id },
        data: {
          emailOtp: newEmailOtp,
          mobileOtp: newMobileOtp,
          expiresAt: newExpiresAt,
        },
      });

      // ✅ Send Email OTP
      // await sendOtpEmail(existingPending.email, newEmailOtp, existingPending.firstName);

      // TODO: Send SMS OTP
      console.log(`📱 Resent Mobile OTP for ${existingPending.mobile}: ${newMobileOtp}`);

      return {
        message: 'OTP resent to your email and mobile',
        expiresIn: 600,
      };
    }

    const emailOtp = generateOtp();
    const mobileOtp = generateOtp();

    const hashedPassword = await bcrypt.hash(data.password, 12);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Expired pending exists → update
    if (existingPending) {
      await prisma.pendingRegistration.update({
        where: { id: existingPending.id },
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          mobile: data.mobile,
          password: hashedPassword,
          role: data.role,
          emailOtp,
          mobileOtp,
          expiresAt,
        },
      });
    } else {
      // Create new pending registration
      await prisma.pendingRegistration.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          mobile: data.mobile,
          password: hashedPassword,
          role: data.role,
          emailOtp,
          mobileOtp,
          expiresAt,
        },
      });
    }

    // ✅ Send Email OTP
    await sendOtpEmail(data.email, emailOtp, data.firstName);

    // TODO: Send SMS OTP
    console.log(`📱 Mobile OTP for ${data.mobile}: ${mobileOtp}`);

    return {
      message: 'OTP sent to your email and mobile',
      expiresIn: 600,
    };
  }

  // ========== STEP 2: Verify Both OTPs & Register ==========
  async verifyOtpsAndRegister(data: VerifyOtpInput) {
    const STATIC_OTP = "123456";

    const pending = await prisma.pendingRegistration.findFirst({
      where: {
        OR: [{ email: data.email }, { mobile: data.mobile }],
      },
    });

    if (!pending) {
      throw new BadRequestError(
        "No pending registration found. Please initiate registration first."
      );
    }

    if (pending.expiresAt < new Date()) {
      await prisma.pendingRegistration.delete({
        where: { id: pending.id },
      });

      throw new BadRequestError(
        "OTP expired. Please initiate registration again."
      );
    }

    // ✅ STATIC OTP CHECK (FOR DEV ONLY)
    const emailOtpValid =
      data.emailOtp === STATIC_OTP || data.emailOtp === pending.emailOtp;

    const mobileOtpValid =
      data.mobileOtp === STATIC_OTP || data.mobileOtp === pending.mobileOtp;

    if (!emailOtpValid) {
      throw new BadRequestError("Invalid email OTP");
    }

    if (!mobileOtpValid) {
      throw new BadRequestError("Invalid mobile OTP");
    }

    const user = await prisma.user.create({
      data: {
        firstName: pending.firstName,
        lastName: pending.lastName,
        email: pending.email,
        mobile: pending.mobile,
        password: pending.password,
        role: pending.role,
        isVerified: true,
      },
    });

    await prisma.pendingRegistration.delete({
      where: { id: pending.id },
    });

    const tokens = await this.generateTokens(
      user.id,
      user.role,
      user.kycStatus
    );

    return {
      message: "Registration successful",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        kycStatus: user.kycStatus,
      },
      ...tokens,
    };
  }

  // ========== RESEND OTP ==========
  async resendOtp(
    data: { email?: string; mobile?: string },
    type: 'email' | 'mobile'
  ) {
    const pending = await prisma.pendingRegistration.findFirst({
      where:
        type === 'email'
          ? { email: data.email }
          : { mobile: data.mobile },
    });

    if (!pending) {
      throw new BadRequestError('No pending registration found');
    }

    if (pending.expiresAt < new Date()) {
      await prisma.pendingRegistration.delete({
        where: { id: pending.id },
      });

      throw new BadRequestError(
        'Registration expired. Please start again.'
      );
    }

    const newOtp = generateOtp();

    if (type === 'email') {
      await prisma.pendingRegistration.update({
        where: { id: pending.id },
        data: { emailOtp: newOtp },
      });

      await sendOtpEmail(
        pending.email,
        newOtp,
        pending.firstName
      );

      console.log(`📧 Resend Email OTP for ${pending.email}: ${newOtp}`);
    }

    if (type === 'mobile') {
      await prisma.pendingRegistration.update({
        where: { id: pending.id },
        data: { mobileOtp: newOtp },
      });

      // SMS provider call here
      console.log(`📱 Resend Mobile OTP for ${pending.mobile}: ${newOtp}`);
    }

    return {
      success: true,
      message: `OTP resent to ${type}`,
      email: pending.email,
      mobile: pending.mobile,
    };
  }

  // ========== LOGIN ==========
  async login(data: LoginInput) {
    let user;

    if (data.email) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
    } else if (data.mobile) {
      user = await prisma.user.findUnique({ where: { mobile: data.mobile } });
    }

    if (!user) {
      throw new NotFoundError('User not found');
    }

    if (!user.isVerified) {
      throw new UnauthorizedError('Account not verified');
    }

    // Verify password
    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new UnauthorizedError('Invalid password');
    }

    const tokens = await this.generateTokens(user.id, user.role, user.kycStatus);

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        isVerified: user.isVerified,
        kycStatus: user.kycStatus,
      },
      ...tokens,
    };
  }


  // ========== FORGOT PASSWORD ==========
  async forgotPassword(data: ForgotPasswordInput) {
    let user;

    const STATIC_OTP = "123456";

    if (data.email) {
      user = await prisma.user.findUnique({
        where: { email: data.email },
      });
    } else if (data.mobile) {
      user = await prisma.user.findUnique({
        where: { mobile: data.mobile },
      });
    }

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const key = `forgot:${user.id}`;

    // always static OTP (NO ENV CHECK)
    const otp = STATIC_OTP;

    await storeSession(key, otp, 600);

    // ❌ NO EMAIL / NO SMS
    console.log(`🔐 Forgot Password OTP for ${user.email || user.mobile}: ${otp}`);

    return {
      success: true,
      message: "OTP generated successfully",
      expiresIn: 600,
      otp, // 👈 for frontend testing only (REMOVE IN PROD)
    };
  }

  // ========== RESET PASSWORD ==========
  async resetPassword(data: ResetPasswordInput) {
    let user;

    const STATIC_OTP = "123456";

    if (data.email) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
    } else if (data.mobile) {
      user = await prisma.user.findUnique({ where: { mobile: data.mobile } });
    }

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const key = `forgot:${user.id}`;
    const storedOtp = await getSession(key);

    // simple static validation
    if (!storedOtp || data.otp !== STATIC_OTP) {
      throw new BadRequestError("Invalid OTP");
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    await deleteSession(key);
    await deleteSession(user.id);

    return {
      message: "Password reset successful. Please login again.",
    };
  }

  // ========== CHANGE PASSWORD (Logged in user) ==========
  async changePassword(userId: string, data: ChangePasswordInput) {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Verify old password
    const isValid = await bcrypt.compare(data.oldPassword, user.password);
    if (!isValid) {
      throw new BadRequestError('Old password is incorrect');
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    // Update password
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    // Delete all sessions (force logout everywhere)
    await deleteSession(userId);

    return { message: 'Password changed successfully. Please login again.' };
  }

  // ========== REFRESH TOKEN ==========
  async refreshToken(refreshToken: string) {
    try {
      const decoded = this.fastify.jwt.verify(refreshToken) as { userId: string; role: string; type: string };

      if (decoded.type !== 'refresh') {
        throw new UnauthorizedError('Invalid token type');
      }

      const storedToken = await getSession(decoded.userId);

      if (!storedToken || storedToken !== refreshToken) {
        throw new UnauthorizedError('Session expired or invalid');
      }

      const accessToken = this.fastify.jwt.sign(
        { userId: decoded.userId, role: decoded.role, type: 'access' },
        { expiresIn: env.JWT_EXPIRES_IN }
      );

      return { accessToken };

    } catch (err) {
      if (err instanceof UnauthorizedError) throw err;
      throw new UnauthorizedError('Invalid refresh token');
    }
  }

  // ========== LOGOUT ==========
  async logout(userId: string, refreshToken: string) {
    const storedToken = await getSession(userId);

    if (storedToken === refreshToken) {
      await deleteSession(userId);
    }

    return { message: 'Logged out successfully' };
  }

  // ========== PRIVATE ==========
  // Enums ko explicitly pass karo type safety ke liye
  private async generateTokens(userId: string, role: string, kycStatus: string) {
    const accessToken = this.fastify.jwt.sign(
      {
        userId,
        role,
        kycStatus,
        type: 'access'
      },
      { expiresIn: env.JWT_EXPIRES_IN }
    );

    const refreshToken = this.fastify.jwt.sign(
      { userId, role, type: 'refresh' },
      { expiresIn: env.REFRESH_TOKEN_EXPIRES_IN }
    );

    const refreshExpiresIn = 7 * 24 * 60 * 60;
    await storeSession(userId, refreshToken, refreshExpiresIn);

    return { accessToken, refreshToken };
  }
}