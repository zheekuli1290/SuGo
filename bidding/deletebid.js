const con = require('../connect');

var db = con.db;
module.exports = {
deletebid: function (bidid,callback){
let sqlbid = 'DELETE Bid WHERE bidding_id = ?';
db.run(sqlbid,[bidid], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ${this.changes}');
    callback(rows[0].Bid);

});
}
}