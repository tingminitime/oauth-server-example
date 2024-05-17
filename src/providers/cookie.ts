import cookie from '@fastify/cookie'
import type { FastifyInstance } from 'fastify'
import type { FastifyCookieOptions } from '@fastify/cookie'

const cookieOptions: FastifyCookieOptions = {
  secret: process.env.COOKIE_SECRET,
  parseOptions: {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  },
}

export function registerCookieProvider(app: FastifyInstance) {
  app.register(cookie, cookieOptions)
}
