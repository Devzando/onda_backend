const router = require('express').Router()
const UserController = require('./controllers/usercontroller')
const DistributionController = require('./controllers/DistributionController')
const ImgProfileController = require('./controllers/imgProfileController')
const ImgDistController = require('./controllers/imgDistController')
const FoodsController = require('./controllers/FoodsController')

const { verifyToken } = require('./helpers/jwt')

router.post('/', UserController.create)
router.post('/login', UserController.login)
router.get('/listusers', verifyToken, UserController.index)
router.put('/updateimgprofile', UserController.updateimguserprofile)
router.put('/updatelogged', UserController.updatelogged)
router.post('/createdist', verifyToken, DistributionController.create)
router.get('/listdistglobal', verifyToken, DistributionController.indexglobalhome)
router.get('/listdistcreate', verifyToken, DistributionController.indexdistcreate)
router.get('/listimgprofile', ImgProfileController.index)
router.get('/listimgdist', ImgDistController.index)
router.get('/listfoods', verifyToken, FoodsController.index)


module.exports = router