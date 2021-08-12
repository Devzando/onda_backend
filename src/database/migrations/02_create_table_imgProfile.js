exports.up = function(knex){
    return knex.schema.createTable('imgProfile', (table) => {
        table.increments('id')
        table.string('name')
        table.string('imgurl')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('imgProfile')
}