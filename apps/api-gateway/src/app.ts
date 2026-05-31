import Fastify from 'fastify';
import proxy from '@fastify/http-proxy';
import jwt from '@fastify/jwt';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(cors);
  await app.register(rateLimit, { max: 100, timeWindow: '1 minute' });
  await app.register(jwt, { secret: process.env.JWT_SECRET! });

  app.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      reply.status(401).send({ error: 'Unauthorized' });
    }
  });

  const authUrl = process.env.AUTH_SERVICE_URL as string;
  const merchantUrl = process.env.MERCHANT_SERVICE_URL as string;
  const qrUrl = process.env.QR_SERVICE_URL as string;

  // Auth Service
  await app.register(proxy, {
    upstream: authUrl,
    prefix: '/auth',
    rewritePrefix: '/auth',
  });

  // Merchant Service
  await app.register(proxy, {
    upstream: merchantUrl,
    prefix: '/merchant',
    rewritePrefix: '/merchant',
  });

  // QR Service
  await app.register(proxy, {
    upstream: qrUrl,
    prefix: '/qr',
    rewritePrefix: '/qr',
  });

  app.get('/health', () => ({ status: 'ok', gateway: true }));

  return app;
}