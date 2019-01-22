
const startbid = require('./startingbid');
const finalbid = require('./finalbid');
const delbid = require('./deletebid');

var taskid = 2;
var userid = 3;
var startamount = 300;
var finalamout = 500;
var start = startbid.insertstart;
var gettask = startbid.gettask;
var final = finalbid.insertfinal;
var del = delbid.deletebid;
function print(name){
  console.log(name);
}
// gettask(taskid,print); uncomment if naa na ang task nga module
start(userid,taskid,startamount,print);