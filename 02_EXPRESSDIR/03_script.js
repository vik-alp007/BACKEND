const express=require("express")
const app=express()
console.dir(app)
app.get("/:username/:id",(req,res)=>{
    res.send("showing on browser")
    console.log(req.params)//used to show on terminal in object form(key: value pair)
})
app.listen(8080,()=>{
    console.log("server running on 8080")
})
// path parameeters
