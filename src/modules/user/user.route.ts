import type { FastifyPluginAsync } from 'fastify'
import { UserController } from './user.controller.ts'
import { UserResponseSchema } from './user.schema.ts'

type AuthenticateFastifyPluginAsync = FastifyPluginAsync<{
  onRequest: string[]
}>

const UserRoute: AuthenticateFastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/user/profile',
    {
      schema: {
        response: {
          '2xx': UserResponseSchema.ResponseOK,
        },
      },
    },
    UserController.getUserProfile,
  )
}

export default UserRoute
