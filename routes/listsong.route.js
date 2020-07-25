var express = require('express')
var listSongController = require('../controllers/listsong.controller')

var router = express.Router()

router.get('/vn', listSongController.listSongVN);
router.get('/vn/young-music', listSongController.vnYoungMusic);
router.get('/vn/lyrical-music', listSongController.vnLyricalMusic);
router.get('/vn/hometown', listSongController.vnHomeTown);
router.get('/vn/vn-rap', listSongController.vnRap);
router.get('/vn/vn-rock', listSongController.vnRock);
router.get('/vn/:id', listSongController.vnSong);

// list song american
router.get('/american', listSongController.listSongAmerican);
router.get('/american/country', listSongController.usaCountry);
router.get('/american/electronic', listSongController.usaElectronic);
router.get('/american/pop', listSongController.usaPop);
router.get('/american/rock', listSongController.usaRock);
router.get('/american/r&b', listSongController.usaRB);
router.get('/american/:id', listSongController.usaSong);

// list-song asia
router.get('/asia', listSongController.listSongAsia);
router.get('/asia/china', listSongController.asiaChina);
router.get('/asia/india', listSongController.asiaIndia);
router.get('/asia/japan', listSongController.asiaJapan);
router.get('/asia/korean', listSongController.asiaKorean);
router.get('/asia/:id', listSongController.asiaSong);

module.exports = router