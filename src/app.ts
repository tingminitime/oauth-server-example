import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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

const app = await fastify({
  logger: envToLogger[process.env.NODE_ENV] ?? true,
  ignoreTrailingSlash: true,
}).withTypeProvider<TypeBoxTypeProvider>()

/**
 * Register all routes in the `routes` directory.
 *
 * @see https://github.com/fastify/fastify-autoload
 */
app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  options: { prefix: '/api' },
})

app.setNotFoundHandler((_request, reply) => {
  reply.code(404).send({ message: 'Not Found' })
})

export default app
