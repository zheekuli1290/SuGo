const con = require('../connect');

var db = con.db;
module.exports = {
paytype: function (payment_type){
let sqlpay = 'INSERT INTO Payment_Method(payment_type) VALUES (?)';
db.run(sqlpay,[payment_type], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ' + this.changes);
    callback(rows[0].Bid);

});
}
}