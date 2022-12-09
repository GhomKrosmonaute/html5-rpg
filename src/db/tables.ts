import db from "."

export interface User {
  id: number
  email: string
  username: string
  passwordHash: string
  gameState: string
}

export const fromUsers = () => db<User>("users")
