const connection = require('../database/connection')

module.exports = {
    async index(req, res){
        try {
            const result = await connection('imgProfile').select()
            const newResult = result.map(item => {
                return {Imgurl: `http://192.168.0.106:3333/assets/profileimgs/${item.imgurl}`, id: item.id}
            })

            res.status(200).send(newResult)
        } catch (error) {
            res.status(400).send()
        }
    }
}