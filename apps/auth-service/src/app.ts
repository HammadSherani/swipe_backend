// File: apps/auth-service/src/app.ts

import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import swaggerPlugin from './plugins/swagger.js';
import { authRoutes } from './modules/auth/auth.routes';
import { logger } from './utils/logger';

export async function buildApp() {
  const app = Fastify({ logger });

  await app.register(jwt, {
    secret: process.env.JWT_SECRET!,
    sign: { expiresIn: process.env.JWT_EXPIRES_IN || '15m' },
  });

  await app.register(swaggerPlugin);

  // Routes
  await app.register(authRoutes, { prefix: '/auth' });

  // Health check
  app.get('/health', async () => ({ status: 'ok', service: 'auth-service' }));

  return app;
}