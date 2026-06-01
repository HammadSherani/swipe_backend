import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return reply.status(401).send({ error: 'No token provided' });
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as { 
  userId: string; 
  role: string; 
  iat: number; 
  exp: number 
};
    request.user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: 'Invalid token' });
  }
}