import { buildApp } from './app.js';

async function start() {
  const PORT = Number(process.env.PORT);

  const app = await buildApp();

  await app.listen({ port: PORT, host: '0.0.0.0' });

  console.log(`🚀 API Gateway on port ${PORT}`);
}

start();