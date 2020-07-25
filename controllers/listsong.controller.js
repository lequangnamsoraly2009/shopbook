var db = require('../db')

// VietNam
module.exports.listSongVN = (req, res) => {
    res.render('listsong/vn/listsong', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnYoungMusic = (req, res) => {
    res.render('listsong/vn/young-music', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnLyricalMusic = (req, res) => {
    res.render('listsong/vn/lyrical-music', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnHomeTown = (req, res) => {
    res.render('listsong/vn/hometown-music', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnRap = (req, res) => {
    res.render('listsong/vn/vn-rap', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnRock = (req, res) => {
    res.render('listsong/vn/vn-rock', {
        songs: db.get('songs').value(),
    })
}

module.exports.vnSong = (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
}

// American
module.exports.listSongAmerican = (req, res) => {
    res.render('listsong/american/listsong', {
        songs: db.get('songs').value(),
    })
}
module.exports.usaCountry = (req, res) => {
    res.render('listsong/american/country', {
        songs: db.get('songs').value(),
    })
}
module.exports.usaElectronic = (req, res) => {
    res.render('listsong/american/electronic', {
        songs: db.get('songs').value(),
    })
}
module.exports.usaPop = (req, res) => {
    res.render('listsong/american/pop', {
        songs: db.get('songs').value(),
    })
}
module.exports.usaRock = (req, res) => {
    res.render('listsong/american/rock', {
        songs: db.get('songs').value(),
    })
}
module.exports.usaRB = (req, res) => {
    res.render('listsong/american/R&B', {
        songs: db.get('songs').value(),
    })
}

module.exports.usaSong = (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
}

// Asia
module.exports.listSongAsia = (req, res) => {
    res.render('listsong/asia/listsong', {
        songs: db.get('songs').value(),
    })
}
module.exports.asiaChina = (req, res) => {
    res.render('listsong/asia/china', {
        songs: db.get('songs').value(),
    })
}

module.exports.asiaIndia = (req, res) => {
    res.render('listsong/asia/india', {
        songs: db.get('songs').value(),
    })
}
module.exports.asiaJapan = (req, res) => {
    res.render('listsong/asia/japan', {
        songs: db.get('songs').value(),
    })
}
module.exports.asiaKorean = (req, res) => {
    res.render('listsong/asia/korean', {
        songs: db.get('songs').value(),
    })
}
module.exports.asiaSong = (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
}