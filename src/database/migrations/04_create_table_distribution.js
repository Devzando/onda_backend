exports.up = function(knex){
    return knex.schema.createTable('distribution', table => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.integer('imgdist_id').unsigned().references('id').inTable('imgDist')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('distribution')
}