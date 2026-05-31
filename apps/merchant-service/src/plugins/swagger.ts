import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { FastifyInstance } from 'fastify';

export default fp(async function (fastify: FastifyInstance) {
  // Swagger documentation
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Merchant Service API',
        description: 'Merchant Service API - Merchant onboarding, management, and operations',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3002',
          description: 'Development server',
        },
      ],
      tags: [
        { name: 'Merchants', description: 'Merchant management endpoints' },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
    },
    staticCSP: true,
  });
});