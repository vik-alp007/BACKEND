
 const express=require("express")
 const app=express()
 app.set("view engine","ejs")//ejs as a template engine
 const path=require("path")//🔥require is a package therefore  requiring it
 app.set("views",path.join(__dirname,"/views")) //🔥//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
 app.get("/:username",(req,res)=>{
   let {username}=req.params
   console.log(username)
let followers=["vikalp","shivansh","shalu"]

   res.render("04_insta.ejs",{username,followers})
 })
 app.listen(8080,()=>{
    console.log("app is runnings on 8080")
 })
//  if i want loops in ejs then 
// app.get("/:username",(req,res)=>{
//    let {username}=req.params,
// 💕let followers=["vikalp","shivansh","shalu"]
//    console.log(username)
//    res.render("04_insta.ejs",{username, 💕followers})
//  })