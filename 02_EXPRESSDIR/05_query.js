const express=require("express")
const app=express()
console.dir(app)

app.get("/services",(req,res)=>{
console.log(req.query)//yeh object k form m query print krwa degi 
// res.send("succesful query")
//yha pe hum destruct krke ek object bna skte hai so that weh chiz jo search kre ho weh screen p aajae
let {q}=req.query
// if(!q) res.send("query nhi aayi hai ").   isko hmesa top ke res.send m likho 
res.send(`these are the search results:${q}`)
})
app.listen(8080,()=>{
    console.log("server running on  8080")
    
})
// yha pe{q } ke andar jo chizen likhi hai and screen p aarhi hai weh tag k andar bhar ke scren pe laaskte hai 
// agr search ke baad kisi ne query nhi bheji toh u can write
// if(!query) then res.send("query nhi aayi hai isko") line 9 ke upar likhna as jab ek res.send hojaega toh niche wala nhi hotahia