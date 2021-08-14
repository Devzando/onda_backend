exports.up = function(knex){
    return knex.schema.createTable('distribution', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('location').notNullable()
        table.string('date').notNullable()
        table.string('time').notNullable()
        table.integer('vacancies').notNullable()
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.integer('imgdist_id').unsigned().notNullable().references('id').inTable('imgDist')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('distribution')
}