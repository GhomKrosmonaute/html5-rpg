import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import { GameState } from "../app/game"
import { fromUsers, User } from "../db/tables"

declare module "express" {
  export interface Request {
    token?: string
  }
}

if (!process.env.JWT_SECRET) throw new Error("Missing JWT_SECRET in .env")

export function hashPassword(plaintextPassword: string) {
  return bcrypt.hash(plaintextPassword, 10)
}

export function comparePassword(plaintextPassword: string, hash: string) {
  return bcrypt.compare(plaintextPassword, hash)
}

// extract token from bearer header
export function extractToken() {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return next()

    const token = authHeader.split(" ")[1]
    if (!token) return next()

    req.token = token
    next()
  }
}

// generate token with jwt
export function generateToken(user: User): string {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  })
}

export function extractTokenUser(token: string): User {
  return jwt.verify(token, process.env.JWT_SECRET!) as User
}

export async function subscribe(req: express.Request, res: express.Response) {
  const existingUser = await fromUsers()
    .where({
      email: req.body.email,
    })
    .first()

  if (existingUser)
    return res.status(409).send(new Error("User already exists"))

  const user = await fromUsers()
    .insert({
      email: req.body.email,
      username: req.body.username,
      passwordHash: await hashPassword(req.body.password),
    })
    .returning("*")
    .first()

  console.log(user)

  if (!user) return res.status(500).send(new Error("User not created"))

  res.json({ token: generateToken(user) })
}

export async function login(req: express.Request, res: express.Response) {
  // login
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

  if (!passwordMatch) return res.status(401).send(new Error("Invalid password"))

  res.json({ token: generateToken(user) })
}

export function extractGameState(user: User): GameState {
  return JSON.parse(user.gameState)
}
