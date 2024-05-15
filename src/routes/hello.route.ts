import type { FastifyPluginAsync } from 'fastify'
import { AutoHelloController } from '../controllers/hello.controller.ts'
import { HelloSchema } from '../schemas/hello.schema.ts'
import { BasicResponseSchema } from '../schemas/response.schema.ts'

const HelloRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/hello',
    {
      schema: {
        querystring: HelloSchema,
        response: {
          '2xx': BasicResponseSchema.ResponseOK,
        },
      },
    },
    AutoHelloController.getHello,
  )

  fastify.get(
    '/hello/:name',
    {
      schema: {
        params: HelloSchema,
        response: {
          '2xx': BasicResponseSchema.ResponseOK,
        },
      },
    },
    AutoHelloController.getHello,
  )

  fastify.post(
    '/hello',
    {
      schema: {
        body: HelloSchema,
        response: {
          '2xx': BasicResponseSchema.ResponseOK,
        },
      },
    },
    AutoHelloController.postHello,
  )
}

export default HelloRoute
