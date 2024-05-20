import cookie from '@fastify/cookie'
import type { FastifyInstance } from 'fastify'
import type { FastifyCookieOptions } from '@fastify/cookie'

const cookieOptions: FastifyCookieOptions = {
  secret: process.env.COOKIE_SECRET,
  parseOptions: {
    domain: 'localhost',
    path: '/',
    maxAge: 60 * 60 * 24 * 1,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
}

export function registerCookieProvider(app: FastifyInstance) {
  app.register(cookie, cookieOptions)
}
