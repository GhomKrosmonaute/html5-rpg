import fastify from "fastify"

export const server = fastify({ logger: true })

server.register(import("./authentication"))

server.listen(process.env.RPG_PORT ?? 3000).catch((err) => {
  server.log.error(err)
  process.exit(1)
})
