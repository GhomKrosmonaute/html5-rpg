const path = require("path")

module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, "migrations"),
  },
  connection: {
    filename: path.join(__dirname, "dist", "db.sqlite"),
  },
}
