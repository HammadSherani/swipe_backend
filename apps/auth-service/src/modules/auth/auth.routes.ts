// File: apps/auth-service/src/modules/auth/auth.routes.ts

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { 
  initiateRegisterHandler,
  verifyOtpsHandler,
  resendOtpHandler,
  loginHandler,
  refreshTokenHandler,
  logoutHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  changePasswordHandler 
} from './auth.controller';

// ✅ Direct authenticate function (plugin ki zaroorat nahi)
async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid or expired token',
      },
    });
  }
}

export async function authRoutes(fastify: FastifyInstance) {
  
  // ========== PUBLIC ROUTES ==========
  
  fastify.post('/register/initiate', {
    schema: { tags: ['Auth'], description: 'Step 1: Enter details, OTPs sent' },
    handler: initiateRegisterHandler,
  });

  fastify.post('/register/verify', {
    schema: { tags: ['Auth'], description: 'Step 2: Verify OTPs' },
    handler: verifyOtpsHandler,
  });

  fastify.post('/register/resend-otp', {
    schema: { tags: ['Auth'], description: 'Resend OTP' },
    handler: resendOtpHandler,
  });

  fastify.post('/login', {
    schema: { tags: ['Auth'], description: 'Login' },
    handler: loginHandler,
  });

  fastify.post('/forgot-password', {
    schema: { tags: ['Auth'], description: 'Forgot password', body: { type: 'object', properties: { email: { type: 'string' } }, required: ['email'] } },
    handler: forgotPasswordHandler
  });

  fastify.post('/reset-password', {
    schema: { tags: ['Auth'], description: 'Reset password' },
    handler: resetPasswordHandler,
  });

  fastify.post('/refresh', {
    schema: { tags: ['Auth'], description: 'Refresh token' },
    handler: refreshTokenHandler,
  });

  // ========== PROTECTED ROUTES ==========
  
  // ✅ Direct function use karo
  fastify.post('/logout', {
    preHandler: [authenticate],
    schema: { tags: ['Auth'], description: 'Logout' },
    handler: logoutHandler,
  });

  fastify.post('/change-password', {
    preHandler: [authenticate],
    schema: { tags: ['Auth'], description: 'Change password' },
    handler: changePasswordHandler,
  });

  fastify.get('/me', {
    preHandler: [authenticate],
    schema: { tags: ['Auth'], description: 'Get current user' },
    handler: async (request, reply) => {
      const user = request.user as { userId: string; role: string };
      return reply.send({ 
        success: true, 
        data: { userId: user.userId, role: user.role } 
      });
    },
  });
}