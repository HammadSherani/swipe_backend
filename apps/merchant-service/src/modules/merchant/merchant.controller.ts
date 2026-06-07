import { FastifyReply, FastifyRequest } from 'fastify';
import { MerchantService } from './merchant.service.js';
import { OnboardInput, NibssCallbackInput } from './merchant.schema.js';

function getUserId(request: FastifyRequest): string {
  const user = request.user as { userId: string };
  return user.userId;
}

export async function initInternalMerchantHandler(
  request: FastifyRequest<{ Body: { merchantId: string } }>,
  reply: FastifyReply
) {
  const { merchantId } = request.body;

  if (!merchantId) {
    return reply.status(400).send({ success: false, message: "merchantId is required" });
  }

   const service = new MerchantService();
  const result = await service.initializeProfile(merchantId);

  return reply.status(201).send({ success: true, data: result });
}

export async function onboardHandler(
  request: FastifyRequest<{ Body: OnboardInput }>,
  reply: FastifyReply
) {
  const userId = getUserId(request);
  const service = new MerchantService();
  const result = await service.onboard(userId, request.body);
  return reply.status(201).send({ success: true, data: result });
}

export async function getMerchantHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = getUserId(request);
  const service = new MerchantService();
  const result = await service.getByUserId(userId);
  return reply.send({ success: true, data: result });
}

export async function nibssCallbackHandler(
  request: FastifyRequest<{ Body: NibssCallbackInput }>,
  reply: FastifyReply
) {
  const service = new MerchantService();
  const result = await service.updateNibssStatus(
    request.body.merchantId,
    request.body.nibssId,
    request.body.status
  );
  return reply.send({ success: true, data: result });
}

export async function getBanksHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const service = new MerchantService();

  const result = await service.getBanks();

  return reply.status(200).send({
    success: true,
    data: result,
  });
}