import express from "express"
import { body } from "express-validator"
import { fromUsers } from "../../db/user"
import { comparePassword } from "../utils"

const router = express.Router()

router.post(
  "/login",
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
  async (req, res) => {
    const user = await fromUsers()
      .where({
        email: req.body.username,
      })
      .first()

    if (!user) return res.status(404).send(new Error("User not found"))

    const passwordMatch = await comparePassword(
      req.body.password,
      user.passwordHash
    )

    if (!passwordMatch)
      return res.status(401).send(new Error("Invalid password"))

    res.send({
      id: user.id,
      token: user.email,
    })
  }
)

router.post(
  "/register",
  body("email").isEmail(),
  body("username").isString().notEmpty(),
  body("password").isStrongPassword(),
  async (req, res) => {
    const user = await fromUsers()
      .where({
        email: req.body.email,
      })
      .first()

    if (user) return res.status(409).send(new Error("User already exists"))

    const [id] = await fromUsers().insert({
      email: req.body.email,
      username: req.body.username,
      passwordHash: req.body.password,
    })

    res.send({
      id,
      token: req.body.email,
    })
  }
)

export default router
