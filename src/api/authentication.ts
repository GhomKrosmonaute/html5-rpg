import { FastifyInstance } from "fastify"

import fluent from "fluent-json-schema"
import { fromUsers } from "../db/user"

export default function (server: FastifyInstance) {
  server.post(
    "/login",
    {
      schema: {
        body: fluent
          .object()
          .prop("username", fluent.string().required())
          .prop("password", fluent.string().required())
          .required(),
        response: {
          200: fluent
            .object()
            .prop("token", fluent.string())
            .prop("id", fluent.string()),
        },
      },
    },
    (request, reply) => {
      const user = fromUsers().where({
        email: request.body.username,
      })

      reply.send({
        id: user.id,
        token: user.token,
      })
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
