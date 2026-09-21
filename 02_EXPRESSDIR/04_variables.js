const express=require("express")
const app=express()
console.dir(app)
// app.get("/:username/:id",(req,res)=>{
//     res.send("showing on browser")
//     console.log(req.params)//used to show on terminal in object form(key: value pair)
// })
app.get("/:username/:id",(req,res)=>{
    // yha pe hum ek variaables mein username ko store kredenge
    let {username,id}=req.params
    res.send(`welcome to the page of ${username}`)
})
app.listen(8080,()=>{
    console.log("server running on  8080")
    
})
// normally instagram kya krta hai ki pura html page hi res.send m bhej deta hai 
// path parameeters
// yha pe hum res.send mein string , bool, html tag sabkuch bhej skte hai 