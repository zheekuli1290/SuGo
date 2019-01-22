const con = require('./connect');

var db = con.db;
module.exports = {
insertstart: function (bidid, finalbid, callback){
var info = [[taskid,finalbid,0]];
let sqlbid = 'INSERT INTO Bid(user_id,task_id,starting_amount) VALUES (?,?,?)';
db.run(sqlbid,[info], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ${this.changes}');
    callback(rows[0].Bid);

});
}
}