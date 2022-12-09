import express from "express"
import { body } from "express-validator"
import {
  extractToken,
  subscribe,
  login,
  extractTokenUser,
  extractGameState,
} from "./utils"

const router = express.Router()

router.delete("/auth", extractToken(), async (req, res) => {})

router.post(
  "/auth",
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
  body("email").isEmail().notEmpty().optional(),
  async (req: express.Request, res: express.Response) => {
    if (req.body.email) await subscribe(req, res)
    else await login(req, res)
  }
)

router.post(
  "input",
  extractToken(),
  async (req: express.Request, res: express.Response) => {
    if (!req.token) return res.status(401).send("Unauthorized")

    const user = extractTokenUser(req.token)

    if (!user) return res.status(401).send("Unauthorized")

    const gameState = extractGameState(user)

    gameState.characters[0]
  }
)

export default router
