const app=require("./apple")
const ban=require("./banana")
const ora=require("./orange")
// pehle variable m individual files of same directory ko require krdo and then array m un variable ko as a elements store kr do 
const bucket=[app, ban, ora]
module.exports=bucket;