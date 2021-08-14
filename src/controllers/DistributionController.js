const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const id_user = req.userId
        const { name, description, location, date, time, vacancies, imgid } = req.body

        try {
            await connection('distribution')
                .insert({ name, description, location, date, time, vacancies, user_id: id_user, imgdist_id: imgid })

            res.status(200).send({ name, description, location, date, time, vacancies })
        } catch (error) {
            console.log(error)
            res.status(401).send()
        }
    },

    async indexglobalhome(req, res) {
        const page = req.query.page
        const limit = 5
        
        const jump = (page - 1) * limit
        
        try {
            const result = await connection('distribution')
            .select(
            'distribution.name', 
            'distribution.date', 
            'distribution.vacancies',
            'distribution.location',
            'distribution.time',
            'distribution.description', 
            'distribution.id', 
            'imgDist.imgurl'
            )
            .join('imgDist', 'imgDist.id', 'distribution.imgdist_id').limit(limit).offset(jump)

            result.forEach(item => {
                item.imgurl = `http://192.168.0.106:3333/assets/distributionimgs/${item.imgurl}`
            })

            const [numberOfRecords] = await connection('distribution').count('id as id');

            const numberPage =  Math.ceil(numberOfRecords.id/5);

            res.status(200).send({result, numberPage})

        } catch (error) {
            console.log(error)
            res.status(401).send()
        }
    }
}