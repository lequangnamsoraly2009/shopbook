var express = require('express')
let singerController = require('../controllers/singer.controller')
const shortid = require('shortid');


var router = express.Router()

router.get('/:id', singerController.singerID);

module.exports = router