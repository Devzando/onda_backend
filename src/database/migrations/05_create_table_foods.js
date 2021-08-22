exports.up = function(knex){
    return knex.schema.createTable('foods', table => {
        table.increments('id')
        table.string('description')
        table.string('imgurl')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('foods')
}