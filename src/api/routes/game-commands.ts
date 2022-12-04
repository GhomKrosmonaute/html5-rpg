import express from "express"
import { body } from "express-validator"

const router = express.Router()

router.post(
  "/click",
  body("x").isNumeric(),
  body("y").isNumeric(),
  (req, res) => {
    // todo: Deduct which important action is run and process it
    // todo: then return the new state of the game by websocket
  }
)

router.post(
  "/action",
  body("action").isString(),
  body("params").isObject(),
  (req, res) => {
    // todo: Trigger not important actions directly
  }
)

export default router
