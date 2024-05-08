import app from './app.ts'

const PORT = Number.parseInt(process.env.FASTIFY_PORT ?? '3000')

app.listen({ port: PORT }, (err, _address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})

console.log(`🚀  Fastify server running on port http://localhost:${PORT}`)
