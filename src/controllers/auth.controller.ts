import type { FastifyReply, FastifyRequest } from 'fastify'

function google(
  req: FastifyRequest,
  reply: FastifyReply,
): void {
  reply.code(200).send({
    success: true,
    message: 'Google login',
  })
}

function googleCallback(
  req: FastifyRequest,
  reply: FastifyReply,
): void {
  reply.code(200).send({
    success: true,
    message: 'Google callback',
  })
}

export const AuthController = {
  google,
  googleCallback,
}
