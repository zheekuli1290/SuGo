const con = require('./connect');

var db = con.db;
module.exports = {
insertstart: function (userid, taskid, startbid, callback){
let sqlbid = 'INSERT INTO Bid(user_id,task_id,starting_amount) VALUES (?,?,?)';
db.run(sqlbid,[userid,taskid,startbid], function(err, rows){
    if(err){
        return console.error(err.message);
    }
    console.log('Rows inserted ' + this.changes);
    callback(rows[0].Bid);

});
},
gettask: function (taskid, callback){
    let sqltask = 'SELECT task_id FROM Task WHERE Task_id = ' + taskid;
    db.run(sqltask, function(err,rows){
        if(err){
            return console.error(err.message);
        }
        console.log('Rows inserted ${this.changes}');
        callback(rows[0].Task);
    
    });
}
}