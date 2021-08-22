const connection = require('../database/connection')

module.exports = {
    async index(req, res){

        try {
            const [result] = await connection.raw('select description, imgurl from foods order by rand() limit 1')

            let newResult
            result.forEach(item => {
                return newResult = item
            });

            res.status(200).send(newResult)
        } catch (error) {
            console.log(error)
        }
    }
}