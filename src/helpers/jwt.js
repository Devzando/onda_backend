require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    async generationtoken(id){
        return jwt.sign({id}, process.env.SECRET, {expiresIn: '1h'})
    }
}