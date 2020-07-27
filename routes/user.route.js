var express = require('express')
const homeProfile = require('../controllers/user.controller')
var router = express.Router()



router.get('/:id', homeProfile.userID);
router.get('/', homeProfile.showUser)
// router.post('/', homeProfile.updateInformation)
module.exports = router