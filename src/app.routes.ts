/**
 * @see https://magiclen.org/fastify-in-typescript/
 */

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { FastifyInstance } from 'fastify'
import { globSync } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function registerRoutes(app: FastifyInstance) {
  const filePaths = globSync('./routes/**/*.route.@(js|ts)', { cwd: __dirname })

  for (const filePath of filePaths) {
    const requirePath = filePath.substring(0, filePath.lastIndexOf('.'))

    const route = (await import(`./${requirePath}.ts`)).default as import('./routes/route.ts').Route

    app.register((app, _opts, done) => {
      route.setRoutes(app)
      done()
    }, { prefix: '/api' })
  }
}
