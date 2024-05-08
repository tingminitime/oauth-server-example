import type { FastifyInstance } from 'fastify'

export interface Route {
  readonly setRoutes: (app: FastifyInstance) => void
}
