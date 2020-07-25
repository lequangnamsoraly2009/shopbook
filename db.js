const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)


// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], singers: [], songs: [] })
    .write()

module.exports = db