const express = require('express')
const cors = require('cors')
const routers = require('./routes')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)
app.use('/assets', express.static(path.resolve(__dirname, '..', 'assets')))

app.listen(3333, () => console.log('foi'))
