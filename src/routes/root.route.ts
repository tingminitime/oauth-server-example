import type { FastifyPluginAsync } from 'fastify'
import { IndexController } from '../controller/indexController.ts'

const RootRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/',
    IndexController.getIndex,
  )
}

export default RootRoute
