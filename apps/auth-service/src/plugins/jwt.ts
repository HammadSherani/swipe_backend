// File: apps/auth-service/src/plugins/jwt.ts

import jwt from '@fastify/jwt';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function jwtPlugin(fastify: FastifyInstance) {
  // JWT register karo
  await fastify.register(jwt, {
    secret: process.env.JWT_SECRET!,
    sign: {
      expiresIn: process.env.JWT_EXPIRES_IN || '15m',
    },
  });

  // ✅ Authenticate decorator
  fastify.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
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
  });
}

// ✅ Type declaration - yeh hona zaroori hai
declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}