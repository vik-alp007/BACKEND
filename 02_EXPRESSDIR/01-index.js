const express=require("express")//express ek func hai 
const app=express()//app ek obj hai
console.dir(app)
// ek obj hai isiliye dir kie hai   
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
// ek baar server start ho jaega toh explicitily stopkrna hoga 
///💻🔥HANDLING REQUESTS
app.use((req,res)=>{
    // console.log("request recieved!")
    //PARSING :http se request text based aati hai express usko object m convert krdeta hai
    console.log(req)//yha pe object bohot sare printhoenge
    //SENDING A RESPONSE USING res.send "method"
    // res.send("THIS IS MY FIRST RESPONSE")
    // hum obj as a response bhi bhej skte hai 
    res.send({
        name:"vikalp",
        age:20
    })
})
// NOTE: app.use se hum route change krenge tabhi same hi page p rhenge , isiliye hum app.get use krte hai 
