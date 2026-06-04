import { buildApp } from './app.js';

async function start() {
  const app = await buildApp();
  await app.listen({ port: 5000, host: '0.0.0.0' });
  console.log('🚀 API Gateway on port 5000');
}

start();