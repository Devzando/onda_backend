const configconnectiondb = require('./src/database/config')
const path = require('path')

module.exports = {
    development: {
        client: 'mysql2',
        connection: configconnectiondb,
        migrations: {
            directory: path.resolve('src', 'database', 'migrations')
        },
        useNullAsDefault: true
    }
}