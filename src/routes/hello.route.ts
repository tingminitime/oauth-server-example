import type { FastifyInstance } from 'fastify'
import { HelloController } from '../controller/helloController.ts'
import { HelloSchema } from '../schemas/hello.schema.ts'
import type { Route } from './route.ts'

const HelloRoute: Route = {
  setRoutes(app: FastifyInstance): void {
    app.get(
      '/hello',
      {
        schema: {
          querystring: HelloSchema,
          response: {
            200: {
              properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
              },
              required: ['success'],
            },
          },
        },
      },
      HelloController.helloGet,
    )

    app.get(
      '/hello/:name',
      { schema: { params: HelloSchema } },
      HelloController.helloGet,
    )

    app.post(
      '/hello',
      { schema: { body: HelloSchema } },
      HelloController.helloPost,
    )
  },
}

export default HelloRoute
