const connection = require('../database/connection')
const { encrypt, decrypt } = require('../helpers/cryptoghaphy')
const { generationtoken } = require('../helpers/jwt')

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body
        const hash = await encrypt(password)
        try {
            await connection('users').insert({ name, email, password: hash })
            res.status(200).send('foi')
        } catch (error) {
            console.log(error)
            res.status(400).send()
        }
    },

    async login(req, res) {
        const {email, password} = req.body
        const [results] = await connection('users').where('email', email).select('password', 'id')
        if(results == undefined || null || '') res.status(401).send()

        const decodedhash = await decrypt(password, results.password)
        if(decodedhash) {
            const token = await generationtoken(results.id)
            res.status(200).send({token, id: results.id})
        }else{
            res.status(401).send()
        }
        
    },

    async index(req, res){
        try {
            const result = await connection('users')
        } catch (error) {
            
        }
    }
}