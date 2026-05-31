import { FastifyInstance, FastifyError, FastifyRequest, FastifyReply } from 'fastify';
import { AppError } from '../errors/custom-errors';

function isFastifyError(error: Error): error is FastifyError {
  return 'code' in error;
}

export async function errorHandlerPlugin(fastify: FastifyInstance) {
  // ❌ Hata do - setValidatorCompiler
  // fastify.setValidatorCompiler(...)

  fastify.setErrorHandler((error: FastifyError | AppError | Error, request: FastifyRequest, reply: FastifyReply) => {
    let statusCode = 500;
    let message = 'Internal server error';
    let code = 'INTERNAL_ERROR';

    if (error instanceof AppError) {
      statusCode = error.statusCode;
      message = error.message;
      code = error.constructor.name.replace('Error', '').toUpperCase();
      
      if (error.isOperational) {
        request.log.warn({ err: error }, error.message);
      } else {
        request.log.error({ err: error }, 'Unexpected error');
      }
    } else if (isFastifyError(error) && error.code === 'FST_ERR_VALIDATION') {
      statusCode = 400;
      message = error.message || 'Validation failed';
      code = 'VALIDATION_ERROR';
      request.log.warn({ err: error }, 'Validation failed');
    } else if (isFastifyError(error)) {
      if (error.code === 'FST_JWT_NO_AUTHORIZATION_IN_HEADER') {
        statusCode = 401;
        message = 'No authorization header provided';
        code = 'UNAUTHORIZED';
      } else if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
        statusCode = 401;
        message = 'Token expired';
        code = 'TOKEN_EXPIRED';
      } else if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_INVALID') {
        statusCode = 401;
        message = 'Invalid token';
        code = 'TOKEN_INVALID';
      } else {
        request.log.error({ err: error }, 'Fastify error');
        message = error.message || 'Internal server error';
      }
    } else {
      request.log.error({ err: error }, 'Unexpected error');
      if (process.env.NODE_ENV === 'production') {
        message = 'Something went wrong';
      } else {
        message = error.message || 'Internal server error';
      }
    }

    reply.status(statusCode).send({
      success: false,
      error: {
        code,
        message,
      },
      requestId: request.id,
    });
  });

  fastify.setNotFoundHandler((request: FastifyRequest, reply: FastifyReply) => {
    request.log.warn(`Route not found: ${request.method} ${request.url}`);
    reply.status(404).send({
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: `Route ${request.method} ${request.url} not found`,
      },
      requestId: request.id,
    });
  });
}