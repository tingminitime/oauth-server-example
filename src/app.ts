import fastify from 'fastify'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { registerRoutes } from './app.routes.ts'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid, hostname',
      },
    },
  },
  production: true,
  test: false,
}

const app = fastify({
  logger: envToLogger[process.env.NODE_ENV] ?? true,
  ignoreTrailingSlash: true,
}).withTypeProvider<TypeBoxTypeProvider>()

app.setNotFoundHandler((_request, reply) => {
  reply.code(404).send({ message: 'Not Found' })
})

await registerRoutes(app)

export default app
