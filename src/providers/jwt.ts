import jwt from '@fastify/jwt'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export function registerJWTProvider(app: FastifyInstance) {
  app.register(jwt, {
    secret: process.env.JWT_SECRET,
    cookie: {
      cookieName: 'access_token',
      signed: false,
    },
    sign: {
      expiresIn: '10m',
    },
  })

  app.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify({ onlyCookie: true })
      }
      catch (err) {
        reply.send(err)
      }
    },
  )
}
