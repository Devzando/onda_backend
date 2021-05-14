const knex = require('knex')
const configconnectiondb = require('./config')

connection = knex({
    client: 'mysql2',
    connection: configconnectiondb,
    useNullAsDefault: true
})

module.exports = connection