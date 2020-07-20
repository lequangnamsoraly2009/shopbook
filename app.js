const express = require('express')
var createError = require('http-errors');
var path = require('path');


var app = express();

var port = 3000

// Set 

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
//
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => { console.log('App listening on port ' + port) });