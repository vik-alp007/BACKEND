const express=require("express")
const app=express()
// SOLUTION👇
app.use(express.urlencoded({extended:true}))
// yeh pe express sirf encoded data ko pdhega json data ko nhi padh skta👇
app.use(express.json())

app.get("/register",(req,res)=>{

    let{user,pass}=req.query//DESTRUCTURE
// yeh krne k baad terminal p print hoga user and passw

    res.send(`Welcome user your name is ${user}`)
})
//hum destructure krenge query string ko and usko screen p dikhaenge
app.post("/register",(req,res)=>{
    // HANDLING POST REQUEST🔥
    console.log(req.body)// yeh terminal p undefind dikhaega jab hum submit krenge iska solution line 3 pe hai🔥
    let{user,pass}=req.body//DESTRUCTURE
    // res.send("hi, i  will study till 4.30am today:STD GET RESPONSE")
    res.send(`Welcome user your name is ${user} STD POST RESPONSE`)
})
    
app.listen(3000,()=>{
   console.log( "LISTENING TO SERVER:3000")
})