import type { FastifyPluginAsync } from 'fastify'
import { RootController } from './root.controller.ts'

const RootRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/',
    RootController.getIndex,
  )
}

export const prefixOverride = '/api'
export default RootRoute
