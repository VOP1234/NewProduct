
exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('url').notNullable()
    table.string('createdat').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('product')
};
