import Fastify from 'fastify';
import { qrRoutes } from './modules/qr/qr.routes.js';
import { errorHandlerPlugin } from './plugins/error-handler.js';

export async function buildApp() {
  const app = Fastify({ 
    logger: true,
    genReqId: () => `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  });

  // Error handler pehle
  await app.register(errorHandlerPlugin);

  // Routes
  await app.register(qrRoutes, { prefix: '/qr' });

  // Health check
  app.get('/health', async () => ({ 
    status: 'ok', 
    service: 'qr-service' 
  }));

  return app;
}