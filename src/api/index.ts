import express from "express"
import authentication from "./routes/authentication"

export const server = express()

server.use(express.json())

server.use("/auth", authentication)

server.listen(process.env.API_PORT ?? 3000, () =>
  console.log(`Server listening on port ${process.env.API_PORT ?? 3000}`)
)
