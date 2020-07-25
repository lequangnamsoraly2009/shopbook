var db = require('../db')
let shortid = require('shortid')
const e = require('express')

module.exports.signUp = (req, res) => {
    res.render('signup/sign-up')
}

module.exports.createUser = (req, res) => {
    var error = [];
    req.body.id = shortid.generate();
    if (req.body.email === db.get('users').email) {
        error.push('Email is already in use ')
    }
    if (error.length) {
        res.render('/signup', {
            error: error,
            value: req.body
        })
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/login')
}