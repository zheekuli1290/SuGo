
const startbid = require('./startingbid');
const finalbid = require('./finalbid');
const delbid = require('./deletebid');

// dummy values ang taskid - finalamount
var bidobj = {
 taskid : 14, 
 userid : 15,
 bidid : 22,
 startamount : 300,
 finalamount : 500,
 start : startbid.insertstart,
 gettask : startbid.gettask,
 final : finalbid.insertfinal,
 del : delbid.deletebid
}
function print(name){
  console.log(name);
}
// gettask(taskid,print); uncomment if naa na ang task nga module
bidobj.start(bidobj.userid,bidobj.taskid,bidobj.startamount,print);
if(bidobj.bidid == 22){
bidobj.final(bidobj.bidid,bidobj.startamount,print);
}

console.log('Success!');