const con = require('connect.js');

var db = con.db;
module.exports = {
canceltask: function (task_state){
let sqltask = 'INSERT INTO Payment_Method(task_state) VALUES (?)';
db.run(sqltask,[task_state], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ' + this.changes);
    callback(rows[0].Bid);

});
}
}