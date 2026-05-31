import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      userId: string;
      type: string;
      iat: number;
      exp: number;
    };
  }
}