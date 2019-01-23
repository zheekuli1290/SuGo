
const startbid = require('./startingbid');
const finalbid = require('./finalbid');
const delbid = require('./deletebid');

// dummy values ang taskid - finalamount
var taskid = 12; 
var userid = 12;
var bidid = 17;
var startamount = 300;
var finalamount = 500;
var start = startbid.insertstart;
var gettask = startbid.gettask;
var final = finalbid.insertfinal;
var del = delbid.deletebid;
function print(name){
  console.log(name);
}
// gettask(taskid,print); uncomment if naa na ang task nga module
start(userid,taskid,startamount,print);
if(bidid == 17){
final(bidid,finalamount,print);
}