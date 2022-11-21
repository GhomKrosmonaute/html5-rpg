import express from "express"
import { body } from "express-validator"

import { fromUsers } from "../../db/user"
import {} from "../utils"

const router = express.Router()

router.post(
  "/login",
  body("username").isString(),
  body("password").isString(),
  async (req, res) => {
    const user = await fromUsers()
      .where({
        email: req.body.username,
      })
      .first()

    if (!user) return res.status(404).send(new Error("User not found"))

    res.send({
      id: user.id,
      token: user.email,
    })
  }
)

router.post(
  "/register",
  body("email").isEmail(),
  body("username").isString(),
  body("password").isStrongPassword(),
  (request, reply) => {
    return { oui: true }
  }
)

export default router
