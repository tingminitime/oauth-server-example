import { promises } from 'node:fs'
import { URL, fileURLToPath } from 'node:url'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

const { readFile } = promises

export default async function indexController(fastify: FastifyInstance) {
  // GET /
  fastify.get('/', async (
    _request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const indexHtmlPath = fileURLToPath(new URL('../../static/index.html', import.meta.url))

    const indexHtmlContent = await readFile(indexHtmlPath)
    reply
      .header('Content-Type', 'text/html; charset=utf-8')
      .send(indexHtmlContent)
  })
}
