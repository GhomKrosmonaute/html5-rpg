import { FastifyInstance } from "fastify"

import fluent from "fluent-json-schema"

export default function (server: FastifyInstance) {
  server.post(
    "/login",
    {
      schema: {
        params: fluent
          .object()
          .prop("username", fluent.string())
          .prop("password", fluent.string()),
        response: {
          200: fluent
            .object()
            .prop("token", fluent.string())
            .prop("id", fluent.string()),
        },
      },
    },
    (request, reply) => {
      return { oui: true }
    }
  )

  server.post(
    "/register",
    {
      schema: {
        params: fluent
          .object()
          .prop("email", fluent.string().format(fluent.FORMATS.EMAIL))
          .prop("username", fluent.string())
          .prop("password", fluent.string()),
        response: {
          200: fluent
            .object()
            .prop("token", fluent.string())
            .prop("id", fluent.string()),
        },
      },
    },
    (request, reply) => {
      return { oui: true }
    }
  )
}
