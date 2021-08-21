const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const id_user = req.userId
        const { name, description, location, vacancies, imgid, date } = req.body

        const newdate = date.slice(0, 10)
        const datenew = newdate.replace(/-/g, "/")
        const newtime = date.slice(11, -8)

        
        try {
            await connection('distribution')
                .insert({ 
                    name, 
                    description, 
                    location, 
                    date: datenew, 
                    time: newtime, 
                    vacancies, 
                    user_id: id_user, 
                    imgdist_id: imgid })

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

            res.status(200).send({result, numberRecords: numberOfRecords.id})

        } catch (error) {
            console.log(error)
            res.status(401).send()
        }
    },

    async indexdistcreate(req, res) {
        const id_user = req.userId

        try {
            const result = await connection('users').where('users.id', id_user)
            .select(
                'distribution.name', 
                'distribution.date', 
                'distribution.vacancies',
                'distribution.location',
                'distribution.time',
                'distribution.description', 
                'distribution.id',
                'imgDist.imgurl'
            ).join('distribution', 'distribution.user_id', 'users.id')
            .join('imgDist', 'imgDist.id', 'distribution.imgdist_id')

                result.forEach(item => {
                    item.imgurl = `http://192.168.0.106:3333/assets/distributionimgs/${item.imgurl}`
                })

                res.status(200).send({result})
        } catch (error) {
            console.log(error)
            res.status(401).send()
        }
    }
}