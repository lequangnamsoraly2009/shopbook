var db = require('../db')

module.exports.logIn = (req, res) => {
    res.render('login/sign-in')
}

module.exports.postLogin = (req, res, next) => {
    var error = [];
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('login/sign-in', {
            error: '1'
        })
        return;
    }
    if (user.password !== password) {
        res.render('login/sign-in', {
            error: '1'
        });
        return;
    }
    res.redirect('/home/user')
}