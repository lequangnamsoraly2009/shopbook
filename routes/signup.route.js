var express = require('express')
let signUpController = require('../controllers/signup.controller')
var router = express.Router()

router.get('/', signUpController.signUp);
router.post('/', signUpController.createUser);

module.exports = router