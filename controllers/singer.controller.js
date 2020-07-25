var db = require('../db')

module.exports.singerID = (req, res) => {
    var idSinger = parseInt(req.params.id);
    res.render('singers/singer', {
        singer: db.get('singers').find({ id: idSinger }).value()
    })
}