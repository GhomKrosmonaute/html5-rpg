import fastify from "fastify"

export const server = fastify({ logger: true })

server.register(import("./routes/authentication"))

server.listen(
  {
    port: process.env.API_PORT ?? 3000,
    host: process.env.API_HOST ?? "localhost",
  },
  (err, address) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }

    server.log.info(`server listening on ${address}`)
  }
)
