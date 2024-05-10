import type { FastifyReply, FastifyRequest } from 'fastify'

export const HelloController = {
  helloGet(
    req: FastifyRequest<{ Querystring: { name?: string }, Params: { name?: string } }>,
    reply: FastifyReply,
  ): void {
    if (req.query.name) {
      req.log.info('Hello, %s', req.query.name)
      reply.send({
        success: true,
        message: `Hello, ${req.query.name}`,
      })
    }

    if (req.params.name) {
      req.log.info('Hello, %s', req.params.name)
      reply.send({
        success: true,
        message: `Hello, ${req.params.name}`,
      })
    }

    reply.send({
      success: true,
      message: 'Hello, stranger!',
    })
  },

  helloGetByParam(
    req: FastifyRequest<{ Params: { name?: string } }>,
    reply: FastifyReply,
  ): void {
    req.log.info('Hello, %s', req.params.name)

    reply.send({
      success: true,
      message: `Hello, ${req.params.name ?? 'stranger'}`,
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
