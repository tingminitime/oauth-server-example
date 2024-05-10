import app from './app.ts'

const PORT = Number.parseInt(process.env.FASTIFY_PORT ?? '3000')

app.listen({ port: PORT }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
