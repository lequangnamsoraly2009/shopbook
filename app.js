const express = require('express')
var createError = require('http-errors');
var path = require('path');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var requireLogin = require('./middlewares/login.middleware')
var sha512 = require('js-sha512');


var db = require('./db')
let listsongRoute = require('./routes/listsong.route')
let singersRoute = require('./routes/singer.route')
let loginRoute = require('./routes/login.route')
let signupRoute = require('./routes/signup.route')
let homeProfile = require('./routes/user.route')

var app = express();
var port = 3000;

// Set 
app.set('views', './views')
app.set('view engine', 'pug')

// Use
app.use(express.static(__dirname + '/public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

// Route
app.use('/list-song', requireLogin.requiredLogin, listsongRoute)
app.use('/singers', requireLogin.requiredLogin, singersRoute)
app.use('/login', loginRoute)
app.use('/signup', signupRoute)
app.use('/user', requireLogin.requiredLogin, homeProfile)
    //Get Home
app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home/user', requireLogin.requiredLogin, (req, res) => {
    res.render('homeislogin')
})





// Post

app.listen(port, () => { console.log('App listening on port ' + port) });