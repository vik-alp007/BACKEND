const express=require("express")
const app=express()
app.set("view engine","ejs")//whenever i render a webpage use ejs as template engine 
app.get("/",(req,res)=>{
    res.render("home.ejs")//yha pe res.send nhi krenge render krenge puri files ko  🔥RENDER = KISI DATA/CODE KO FINAL VISUAL WEBPAGE MEIN CONVERT KARKE DISPLAY KARNA.
    //EJS LAGANE HI PDEGA 
})
app.listen(8080,(req,res)=>{
    console.log("running on port 8080")
})
