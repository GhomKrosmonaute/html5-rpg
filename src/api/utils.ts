import {
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteHandlerMethod,
} from "fastify"

export type Handler<Body, Response> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Reply: Response | Error; Body: Body }
>

export function makeHandler<Body, Response>(
  handler: Handler<Body, Response>
): Handler<Body, Response> {
  return handler
}
