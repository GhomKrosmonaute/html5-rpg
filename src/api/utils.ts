import bcrypt from "bcrypt"

export function hashPassword(plaintextPassword: string) {
  return bcrypt.hash(plaintextPassword, 10)
}

export function comparePassword(plaintextPassword: string, hash: string) {
  return bcrypt.compare(plaintextPassword, hash)
}
