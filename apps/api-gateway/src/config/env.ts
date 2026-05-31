// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('3000'),
  JWT_SECRET: z.string().min(32),
  AUTH_SERVICE_URL: z.string().url(),
  MERCHANT_SERVICE_URL: z.string().url(),
  QR_SERVICE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);

