import { FastifyInstance } from 'fastify';
import {
  onboardHandler,
  getMerchantHandler,
  nibssCallbackHandler,
  getBanksHandler,
} from './merchant.controller.js';
import { authenticate } from '../../plugins/auth-middleware.js';

export async function merchantRoutes(fastify: FastifyInstance) {

  // Public — NIBSS webhook (no auth)
  fastify.post('/webhook/nibss', nibssCallbackHandler);
  fastify.get('/getBanks', getBanksHandler);

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
  // fastify.get('/getBanks', {
  //   schema: { tags: ['Merchants'], description: 'Get my merchant details' },
  //   // preHandler: authenticate,
  //   handler: getBanksHandler,
  // });
}