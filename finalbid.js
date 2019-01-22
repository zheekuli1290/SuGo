const con = require('./connect');

var db = con.db;
module.exports = {
insertfinal: function (bidid, finalbid, callback){
var info = [[finalbid,bidid]];
let sqlbid = 'UPDATE Bid SET final_amount = ? WHERE bidding_id = ?';
db.run(sqlbid,[info], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ${this.changes}');
    callback(rows[0].Bid);

});
}
}