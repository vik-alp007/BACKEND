// how to make an node server with express
const express=require("express")
const app=express()
console.dir(app)
// app.listen(port,callback). hum yha pe port ko ek variable m bna skte hai yha sidha fun m likh de 
// listen line ka mtalab express, server ko 3000 port p start krdo 

// listen wali line ka matlab 8080 port par baith jao and req suno(matlb jab bhi koi browser p search krega toh req dega)
// app.get(path,callback)
// GET: isse route bnega
app.get("/",(req,res)=>{
    res.send("hello from express")
    //note yeh respnse bhejega jo screen p dikhega 
})
// hum res.send mein kuch bhi dikha skte hai screen p tags , array , object, 
// YHA PE HUM MULTIPLE ROUTES BNA SKTE HAI 👇

app.get("/about",(req,res)=>{
    res.send("hello from express2")
    //note yeh respnse bhejega jo screen p dikhega 
})
app.get("/services",(req,res)=>{
    res.send("hello from express3")
    //note yeh respnse bhejega jo screen p dikhega 
})
// yha pe agr hum search krenge jo path yha pe defined nhi hai toh error aajaega
// IF USER AISE KISI ROUTE PE RESPONSE BHEJ RHA HAI JO KI DEFINED NHI HAI , THEN
app.use((req,res)=>{
    res.status(404).send("this path doesnt exist!")
})
app.listen(8080,()=>{
    console.log(`server is running on port :8080`)
})