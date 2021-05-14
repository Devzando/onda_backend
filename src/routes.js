const router = require('express').Router()
const UserController = require('./controllers/usercontroller')

router.post('/', UserController.create)
router.post('/login', UserController.login)


module.exports = router