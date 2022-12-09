import express from "express"
import router from "./routes"

export const server = express()

// Middleware & Route handling

server.use(express.json(), express.urlencoded({ extended: true }), router)

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
  },
  (err: Error, req: express.Request, res: express.Response, next) => {
    res.status(500).send(err.message)
  }
)

// Start server

server.listen(process.env.API_PORT ?? 3000, () =>
  console.log(`Server listening on port ${process.env.API_PORT ?? 3000}`)
)
