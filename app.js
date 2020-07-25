const express = require('express')
var createError = require('http-errors');
var path = require('path');
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)


// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], singers: [], songs: [] })
    .write()

var app = express();

var port = 3000

// Set 
app.set('views', './views')
app.set('view engine', 'pug')

// Use
app.use(express.static(__dirname + '/public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Get
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login/sign-in')
});

app.get('/logout', (req, res) => {
    res.render('logout/sign-up')
});

// list song vietnam

app.get('/list-song/vn', (req, res) => {
    res.render('listsong/vn/listsong', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/vn/young-music', (req, res) => {
    res.render('listsong/vn/young-music', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/vn/lyrical-music', (req, res) => {
    res.render('listsong/vn/lyrical-music', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/vn/hometown', (req, res) => {
    res.render('listsong/vn/hometown-music', {
        songs: db.get('songs').value(),
    })
});
app.get('/list-song/vn/vn-rap', (req, res) => {
    res.render('listsong/vn/vn-rap', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/vn/vn-rock', (req, res) => {
    res.render('listsong/vn/vn-rock', {
        songs: db.get('songs').value(),
    })
});


app.get('/list-song/vn/:id', (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
});

// list song american
app.get('/list-song/american', (req, res) => {
    res.render('listsong/american/listsong', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/american/country', (req, res) => {
    res.render('listsong/american/country', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/american/electronic', (req, res) => {
    res.render('listsong/american/electronic', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/american/pop', (req, res) => {
    res.render('listsong/american/pop', {
        songs: db.get('songs').value(),
    })
});
app.get('/list-song/american/rock', (req, res) => {
    res.render('listsong/american/rock', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/american/r&b', (req, res) => {
    res.render('listsong/american/R&B', {
        songs: db.get('songs').value(),
    })
});


app.get('/list-song/american/:id', (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
});

// list-song asia
app.get('/list-song/asia', (req, res) => {
    res.render('listsong/asia/listsong', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/asia/china', (req, res) => {
    res.render('listsong/asia/china', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/asia/india', (req, res) => {
    res.render('listsong/asia/india', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/asia/japan', (req, res) => {
    res.render('listsong/asia/japan', {
        songs: db.get('songs').value(),
    })
});
app.get('/list-song/asia/korean', (req, res) => {
    res.render('listsong/asia/korean', {
        songs: db.get('songs').value(),
    })
});

app.get('/list-song/asia/:id', (req, res) => {
    var idSong = parseInt(req.params.id);
    res.render('songs/song', {
        song: db.get('songs').find({ id: idSong }).value(),
    })
});

app.get('/singers/:id', (req, res) => {
    var idSinger = parseInt(req.params.id);
    res.render('singers/singer', {
        singer: db.get('singers').find({ id: idSinger }).value()
    })
});


// Post

app.listen(port, () => { console.log('App listening on port ' + port) });