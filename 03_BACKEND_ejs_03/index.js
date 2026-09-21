const express=require("express")
const app=express()
app.set("viewengine","ejs")
app.get("/",(req,res)=>{
    res.render("home.ejs")
    //ejs lagane hi pdega 
})
app.listen(8080,(req,res)=>{
    console.log("running on port 8080")
})
