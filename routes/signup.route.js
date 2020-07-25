var express = require('express')
let signUpController = require('../controllers/signup.controller')
var router = express.Router()

router.get('/', signUpController.signUp);

module.exports = router