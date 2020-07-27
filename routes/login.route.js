var express = require('express')
let logInController = require('../controllers/login.controller')

var router = express.Router()

router.get('/', logInController.logIn);
router.post('/', logInController.postLogin)


module.exports = router