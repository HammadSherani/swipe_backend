import { FastifyInstance, FastifyError, FastifyRequest, FastifyReply } from 'fastify';

function isFastifyError(error: Error): error is FastifyError {
  return 'code' in error;
}

export async function errorHandlerPlugin(fastify: FastifyInstance) {
  fastify.setErrorHandler((error: FastifyError | Error, request: FastifyRequest, reply: FastifyReply) => {
    let statusCode = 500;
    let message = 'Internal server error';
    let code = 'INTERNAL_ERROR';

    if (isFastifyError(error) && error.validation) {
      statusCode = 400;
      message = `Validation error: ${error.message}`;
      code = 'VALIDATION_ERROR';
    } else if (isFastifyError(error)) {
      statusCode = 400;
      message = error.message || 'Bad request';
      code = error.code || 'BAD_REQUEST';
    } else {
      message = error.message || 'Internal server error';
    }

    reply.status(statusCode).send({
      success: false,
      error: { code, message },
      requestId: request.id,
    });
  });
}