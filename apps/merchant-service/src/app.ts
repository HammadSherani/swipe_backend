import Fastify from 'fastify';
import { merchantRoutes } from './modules/merchant/merchant.routes';
import { logger } from './utils/logger';
import swaggerPlugin from './plugins/swagger';

export async function buildApp() {
  const app = Fastify({ logger });
  await app.register(swaggerPlugin);

  await app.register(merchantRoutes, { prefix: '/merchant' });

  app.get('/health', async () => ({ status: 'ok', service: 'merchant-service' }));

  return app;
}