import fastify from "fastify"

export const server = fastify({ logger: true })

server.register(import("./authentication"))

server.listen(process.env.API_PORT ?? 3000, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  server.log.info(`server listening on ${address}`)
})
