import { FastifyInstance } from 'fastify';
import bcrypt from 'bcryptjs';
import { env } from '../../config/env';
import { generateOtp } from '../../utils/otp';
import { storeOtp, getOtp, deleteOtp, storeSession, getSession, deleteSession } from '../../config/redis';
import { checkOtpRateLimit } from '../../config/rate-limit';
import {
  BadRequestError,
  UnauthorizedError,
  TooManyRequestsError,
  NotFoundError
} from '../../errors/custom-errors';
import { InitiateRegisterInput, VerifyOtpInput, LoginInput, ForgotPasswordInput, ResetPasswordInput, ChangePasswordInput } from './auth.schema';
import { prisma } from '../../config/database';

export class AuthService {
  constructor(private fastify: FastifyInstance) { }

  // ========== STEP 1: Initiate Registration ==========
  async initiateRegistration(data: InitiateRegisterInput) {
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { mobile: data.mobile },
        ],
      },
    });

    if (existingUser) {
      throw new BadRequestError('User with this email or mobile already exists');
    }

    // Check pending registration
    const existingPending = await prisma.pendingRegistration.findUnique({
      where: { mobile: data.mobile },
    });

    if (existingPending && existingPending.expiresAt > new Date()) {
      throw new BadRequestError('Registration already initiated. Please verify OTPs.');
    }

    // Delete old pending if expired
    if (existingPending) {
      await prisma.pendingRegistration.delete({ where: { mobile: data.mobile } });
    }

    // Generate OTPs
    const emailOtp = generateOtp();
    const mobileOtp = generateOtp();

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Save pending registration
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

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

    // TODO: Send email OTP via email service
    // TODO: Send mobile OTP via SMS service

    console.log(`📧 Email OTP for ${data.email}: ${emailOtp}`);
    console.log(`📱 Mobile OTP for ${data.mobile}: ${mobileOtp}`);

    return {
      message: 'OTP sent to your email and mobile',
      expiresIn: 600, // 10 minutes
    };
  }

  // ========== STEP 2: Verify Both OTPs & Register ==========
  async verifyOtpsAndRegister(data: VerifyOtpInput) {
    // Find pending registration
    const pending = await prisma.pendingRegistration.findUnique({
      where: { mobile: data.mobile },
    });

    if (!pending) {
      throw new BadRequestError('No pending registration found. Please initiate registration first.');
    }

    if (pending.expiresAt < new Date()) {
      await prisma.pendingRegistration.delete({ where: { mobile: data.mobile } });
      throw new BadRequestError('OTP expired. Please initiate registration again.');
    }

    // Verify email OTP
    if (pending.emailOtp !== data.emailOtp) {
      throw new BadRequestError('Invalid email OTP');
    }

    // Verify mobile OTP
    if (pending.mobileOtp !== data.mobileOtp) {
      throw new BadRequestError('Invalid mobile OTP');
    }

    // Create user
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

    // Delete pending registration
    await prisma.pendingRegistration.delete({ where: { mobile: data.mobile } });

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.role);

    return {
      message: 'Registration successful',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
      ...tokens,
    };
  }

  // ========== RESEND OTP ==========
  async resendOtp(mobile: string, type: 'email' | 'mobile') {
    const pending = await prisma.pendingRegistration.findUnique({
      where: { mobile },
    });

    if (!pending) {
      throw new BadRequestError('No pending registration found');
    }

    if (pending.expiresAt < new Date()) {
      await prisma.pendingRegistration.delete({ where: { mobile } });
      throw new BadRequestError('Registration expired. Please start again.');
    }

    const newOtp = generateOtp();

    if (type === 'email') {
      await prisma.pendingRegistration.update({
        where: { mobile },
        data: { emailOtp: newOtp },
      });
      console.log(`📧 Resend Email OTP for ${pending.email}: ${newOtp}`);
    } else {
      await prisma.pendingRegistration.update({
        where: { mobile },
        data: { mobileOtp: newOtp },
      });
      console.log(`📱 Resend Mobile OTP for ${mobile}: ${newOtp}`);
    }

    return { message: `OTP resent to ${type}` };
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

    const tokens = await this.generateTokens(user.id, user.role);

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
      ...tokens,
    };
  }


  // ========== FORGOT PASSWORD ==========
  async forgotPassword(data: ForgotPasswordInput) {
    let user;

    if (data.email) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
    } else if (data.mobile) {
      user = await prisma.user.findUnique({ where: { mobile: data.mobile } });
    }

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Generate OTP
    const otp = generateOtp();
    const key = `forgot:${user.id}`;

    // Store in Redis (10 min expiry)
    await storeSession(key, otp, 600);

    // TODO: Send OTP via email/SMS
    console.log(`🔐 Forgot Password OTP for ${data.email || data.mobile}: ${otp}`);

    return {
      message: 'OTP sent for password reset',
      expiresIn: 600,
    };
  }

  // ========== RESET PASSWORD ==========
  async resetPassword(data: ResetPasswordInput) {
    let user;

    if (data.email) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
    } else if (data.mobile) {
      user = await prisma.user.findUnique({ where: { mobile: data.mobile } });
    }

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const key = `forgot:${user.id}`;
    const storedOtp = await getSession(key);

    if (!storedOtp || storedOtp !== data.otp) {
      throw new BadRequestError('Invalid or expired OTP');
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    // Update password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Delete OTP
    await deleteSession(key);

    // Delete all sessions (force logout everywhere)
    await deleteSession(user.id);

    return { message: 'Password reset successful. Please login again.' };
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
  private async generateTokens(userId: string, role: string) {
    const accessToken = this.fastify.jwt.sign(
      { userId, role, type: 'access' },
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