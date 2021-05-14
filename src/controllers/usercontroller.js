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
        const [hash] = await connection('users').where('email', email).select('password', 'id')
        if(hash == undefined || null || '') res.status(401).send()

        const result = await decrypt(password, hash.password)
        if(result) {
            const token = await generationtoken(hash.id)
            res.status(200).send({token})
        }else{
            res.status(401).send()
        }
        
    }
}