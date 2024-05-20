import type { FastifyPluginAsync } from 'fastify'
import { AuthController } from './auth.controller.ts'

const AuthRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/auth/google/login',
    {},
    AuthController.google,
  )

  fastify.get(
    '/auth/google/callback',
    {},
    AuthController.googleCallback,
  )
}

export default AuthRoute
