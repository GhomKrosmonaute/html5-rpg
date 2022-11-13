import {
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from "fastify"
import { fromUsers } from "../../db/user"
import { makeHandler } from "../utils"

import fluent from "fluent-json-schema"

export default function (
  server: FastifyInstance,
  options: object,
  done: () => void
) {
  server.post(
    "/login",
    {
      schema: {
        body: {
          username: fluent.string().required(),
          password: fluent.string().required(),
        },
        response: {
          200: {
            id: fluent.number(),
            token: fluent.string(),
          },
        },
      },
    },
    makeHandler<
      {
        username: string
      },
      {
        id: number
        token: string
      }
    >(async (request, reply) => {
      const user = await fromUsers()
        .where({
          email: request.body.username,
        })
        .first()

      if (!user) return reply.send(new Error("User not found"))

      reply.send({
        id: user.id,
        token: user.email,
      })
    })
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

  done()
}
