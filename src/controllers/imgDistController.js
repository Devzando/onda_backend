const connection = require('../database/connection')

module.exports = {
    async index(req, res){
        try {
            const result = await connection('imgDist').select('imgurl', 'id')

            result.forEach(item => {
               item.imgurl = `http://192.168.0.106:3333/assets/distributionimgs/${item.imgurl}`
            });

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send()
        }
    }
}