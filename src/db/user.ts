import db from "."

export interface User {
  id: number
  email: string
  username: string
  passwordHash: string
}

export const fromUsers = () => db<User>("users")
