import knex from "knex"
import path from "path"

// const db = knex({
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   },
// })

const db = knex(require("../../knexfile"))

export default db
