import Fastify from 'fastify';
import { merchantRoutes } from './modules/merchant/merchant.routes.js';
import { logger } from './utils/logger.js';
import swaggerPlugin from './plugins/swagger.js';

export async function buildApp() {
  const app = Fastify({ logger });
  await app.register(swaggerPlugin);

  await app.register(merchantRoutes, { prefix: '/merchant' });

  app.get('/health', async () => ({ status: 'ok', service: 'merchant-service' }));

  return app;
}