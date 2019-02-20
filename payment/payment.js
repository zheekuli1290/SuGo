const con = require('../connect');

var db = con.db;
module.exports = {
payment: function (method_id, user_id, date_paid, total_amount, payment_state){
let sqlpay = 'INSERT INTO Payment_Method(method_id, user_id, date_paid, total_amount, payment_state) VALUES (?,?,?,?,?)';
db.run(sqlpay,[method_id, user_id, date_paid, total_amount, payment_state], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ' + this.changes);
    callback(rows[0].Bid);

});
}
}