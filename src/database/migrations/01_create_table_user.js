exports.up = function(knex){
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.integer('imgProfile_id').defaultTo(1).unsigned().references('id').inTable('imgProfile')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('users')
}