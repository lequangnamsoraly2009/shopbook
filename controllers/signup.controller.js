var sha512 = require('js-sha512')
var db = require('../db')
let shortid = require('shortid')
const e = require('express')

module.exports.signUp = (req, res) => {
    res.render('signup/sign-up')
}

module.exports.createUser = (req, res) => {
    var error = [];
    var email = req.body.email;
    req.body.id = shortid.generate();
    if (db.get('users').find({ email: email }).value()) {
        error.push('Email is already in use ')
    }
    if (error.length) {
        res.render('signup/sign-up', {
            error: error,
            value: req.body
        })
        return;
    }
    req.body.password = sha512(req.body.password)
    req.body.password_confirmation = sha512(req.body.password_confirmation)
    db.get('users').push(req.body).write();
    res.redirect('/login')
}