var db = require('../db')

module.exports.showUser = (req, res, next) => {
    var user = db.get('users').find({ id: req.cookies.userId }).value();
    if (!user) {
        res.redirect('/login')
        return
    }
    res.redirect('/user/' + user.id)
    res.render('user/user', {
        user: user
    })
}

module.exports.userID = (req, res) => {
    var idUser = req.params.id;
    res.render('user/user', {
        user: db.get('users').find({ id: idUser }).value()
    })
}

// module.exports.updateInformation = (req, res) => {
//     var userId = req.cookies;
//     db.get('users').find({ id: userId }).set({ 'users': req.body }).write()
// }