// PUSHING DATA WITH EJS:here we will study how to pass data to backend through database
 const express=require("express")
 const app=express()
 const path=require("path")//🔥require is a package therefore  requiring it
 app.set("views",path.join(__dirname,"/views")) //🔥//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
 app.set("view engine","ejs")//ejs as a template engine
 app.get("/rolldice",(req,res)=>{
   let dicevalue= Math.floor( Math.random()*6)+1 //we are assuming ki data database se aaya hai isiliye yh krrhe hai💕
   res.render("03_rolldice.ejs",{dicevalue})
   // {num:dicevalue}={dicevalue:dicevalue}={dicevalue} tab  ejs tag mein 
 })
 app.listen(8080,()=>{
    console.log("app is running on 8080")
 })