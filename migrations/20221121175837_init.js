/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.string("email")
    table.string("passwordHash")
    table.json("gameState").defaultTo("{}")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("users")
}
