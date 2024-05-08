import type { FastifyReply, FastifyRequest } from 'fastify'

export const HelloController = {
  helloGet(
    req: FastifyRequest<{ Querystring: { name?: string } }>,
    reply: FastifyReply,
  ): void {
    reply.send({
      success: true,
      message: `Hello, ${req.query.name ?? 'stranger'}`,
    })
  },

  helloPost(
    req: FastifyRequest<{ Body: { name?: string } }>,
    reply: FastifyReply,
  ): void {
    reply.send({
      success: true,
      message: `Hello, ${req.body.name ?? 'stranger'}`,
    })
  },
}
