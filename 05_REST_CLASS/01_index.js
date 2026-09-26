const express=require("express")
const app=express()
// CLIENT SIDE SE JOBHI DATA AAEGA USKO PARSE KRNE K LIYE MIDDLEWARES USE HOTE HAI 👆
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// 👆
const path=require("path")//pehle require  phir use
app.set("view engine","ejs")

app.set("views" ,path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
// 👇yha pe let se banaya bcz update ya change krenge isiliye consst se nhi bnaya 
let posts=[
    {name:"vikalp",
        content:" i am gone be the final memeber of ccc "
    },
    {name:"viku",
        content:" i am gone be the final memeber of ccc "
    },
    {name:"shani",
        content:" i am gone be the final memeber of ccc "
    }
]
app.get("/",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.listen(3000,()=>{
    console.log("server is running on port3000")
})