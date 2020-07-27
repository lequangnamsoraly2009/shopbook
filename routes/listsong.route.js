var express = require('express')
var listSongController = require('../controllers/listsong.controller')
var requireLogin = require('../middlewares/login.middleware')

var router = express.Router()


router.get('/vn', requireLogin.requiredLogin, listSongController.listSongVN);
router.get('/vn/young-music', requireLogin.requiredLogin, listSongController.vnYoungMusic);
router.get('/vn/lyrical-music', requireLogin.requiredLogin, listSongController.vnLyricalMusic);
router.get('/vn/hometown', requireLogin.requiredLogin, listSongController.vnHomeTown);
router.get('/vn/vn-rap', requireLogin.requiredLogin, listSongController.vnRap);
router.get('/vn/vn-rock', requireLogin.requiredLogin, listSongController.vnRock);
router.get('/vn/:id', requireLogin.requiredLogin, listSongController.vnSong);

// list song american
router.get('/american', requireLogin.requiredLogin, listSongController.listSongAmerican);
router.get('/american/country', requireLogin.requiredLogin, listSongController.usaCountry);
router.get('/american/electronic', requireLogin.requiredLogin, listSongController.usaElectronic);
router.get('/american/pop', requireLogin.requiredLogin, listSongController.usaPop);
router.get('/american/rock', requireLogin.requiredLogin, listSongController.usaRock);
router.get('/american/r&b', requireLogin.requiredLogin, listSongController.usaRB);
router.get('/american/:id', requireLogin.requiredLogin, listSongController.usaSong);

// list-song asia
router.get('/asia', requireLogin.requiredLogin, listSongController.listSongAsia);
router.get('/asia/china', requireLogin.requiredLogin, listSongController.asiaChina);
router.get('/asia/india', requireLogin.requiredLogin, listSongController.asiaIndia);
router.get('/asia/japan', requireLogin.requiredLogin, listSongController.asiaJapan);
router.get('/asia/korean', requireLogin.requiredLogin, listSongController.asiaKorean);
router.get('/asia/:id', requireLogin.requiredLogin, listSongController.asiaSong);

module.exports = router