import { FastifyInstance } from 'fastify';
import {
  generateStaticHandler,
  generateDynamicHandler,
  decodeHandler,
  getByMerchantHandler,
} from './qr.controller.js';
import { authenticate } from '../../plugins/auth-middleware.js';

export async function qrRoutes(fastify: FastifyInstance) {
  
  // Protected — Merchant only
  fastify.post('/static', {
    preHandler: authenticate,
    handler: generateStaticHandler,
  });

  fastify.post('/dynamic', {
    preHandler: authenticate,
    handler: generateDynamicHandler,
  });

  fastify.get('/merchant/:merchantId', {
    preHandler: authenticate,
    handler: getByMerchantHandler,
  });

  // Public — Customer scan karega
  fastify.post('/decode', decodeHandler);
}