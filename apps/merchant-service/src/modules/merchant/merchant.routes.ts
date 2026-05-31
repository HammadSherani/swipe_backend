import { FastifyInstance } from 'fastify';
import {
  onboardHandler,
  getMerchantHandler,
  nibssCallbackHandler,
} from './merchant.controller';
import { authenticate } from '../../plugins/auth-middleware';

export async function merchantRoutes(fastify: FastifyInstance) {

  // Public — NIBSS webhook (no auth)
  fastify.post('/webhook/nibss', nibssCallbackHandler);

  // Protected — JWT required
  fastify.post('/onboard', {
    schema: { tags: ['Merchants'], description: 'ONBOARD MERCHANT' },
    preHandler: authenticate,
    handler: onboardHandler,
  });

  fastify.get('/me', {
    schema: { tags: ['Merchants'], description: 'Get my merchant details' },
    preHandler: authenticate,
    handler: getMerchantHandler,
  });
}