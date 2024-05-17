import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import autoLoad from '@fastify/autoload'
import type { FastifyInstance } from 'fastify'

/**
 * Register all routes in the `routes` directory
 *
 * @see https://github.com/fastify/fastify-autoload
 */
export function registerAutoloadProvider(app: FastifyInstance) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  app.register(autoLoad, {
    dir: join(__dirname, '../modules/'),
    // indexPattern: /^.*\.route(?:\.ts|\.js|\.cjs|\.mjs)$/,
    routeParams: true,
    matchFilter: path => path.endsWith('.route.ts'),
    options: { prefix: '/api' },
  })
}
