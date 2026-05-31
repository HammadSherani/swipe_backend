import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      userId: string;
      role: string;
      iat?: number;
      exp?: number;
    };
  }
}