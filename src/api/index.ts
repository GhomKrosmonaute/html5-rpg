import express from "express"
import { expressjwt } from "express-jwt"

import authentication from "./routes/authentication"
import gameCommands from "./routes/game-commands"

export const server = express()

const secret = process.env.API_SECRET

if (!secret) throw new Error("Missing API_SECRET in .env")

// Middleware handling

server.use(express.json(), express.urlencoded({ extended: true }))

// Route handling

server.use("/auth", authentication)
server.use(
  "/game",
  expressjwt({
    secret,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }),
  gameCommands
)

// Error handling

server.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("invalid token...")
    } else {
      next(err)
    }
  }
)

// Start server

server.listen(process.env.API_PORT ?? 3000, () =>
  console.log(`Server listening on port ${process.env.API_PORT ?? 3000}`)
)
