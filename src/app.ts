import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import type { FastifyCookieOptions } from '@fastify/cookie'

/**
 * Load environment variables from the `.env` file
 */
import 'dotenv/config'

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

/**
 * Create a Fastify instance
 */
const app = await fastify({
  logger: envToLogger[process.env.NODE_ENV] ?? true,
  ignoreTrailingSlash: true,
}).withTypeProvider<TypeBoxTypeProvider>()

/**
 * Cookie configuration
 */
app.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  parseOptions: {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  },
} as FastifyCookieOptions)

/**
 * CORS configuration
 */
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true,
})

/**
 * Register all routes in the `routes` directory
 *
 * @see https://github.com/fastify/fastify-autoload
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  options: { prefix: '/api' },
})

/**
 * Error handler
 */
app.setNotFoundHandler((_request, reply) => {
  reply.code(404).send({ message: 'Not Found' })
})

export default app
