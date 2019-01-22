const con = require('./connect');

var db = con.db;
module.exports = {
deletebid: function (bidid,callback){
var info = [bidid];
let sqlbid = 'DELET Bid WHERE bidding_id = ?';
db.run(sqlbid,[info], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ${this.changes}');
    callback(rows[0].Bid);

});
}
}