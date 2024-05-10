import type { FastifyInstance } from 'fastify'
import { IndexController } from '../controller/indexController.ts'
import type { Route } from './route.ts'

const IndexRoute: Route = {
  setRoutes(app: FastifyInstance): void {
    app.get(
      '/',
      IndexController.indexGet,
    )
  },
}

export default IndexRoute
