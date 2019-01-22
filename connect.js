const sqlite3 = require('sqlite3').verbose();
// open database in memory
let db = new sqlite3.Database('./SuGo.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SuGo database.');
});

module.exports.db = db;