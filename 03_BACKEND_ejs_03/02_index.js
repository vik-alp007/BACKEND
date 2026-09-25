// if i want ki 02index.js ko 03 backe senhi main 'BACKEND" se run kru tab problem yeh aaegi ki views folder 03 mein hai main(BACKEND) m nhi hai isiliye soln👇
const express=require("express")
const app=express()
const path=require("path")//YEH EK PACKAGE HAI ,THEREFORE REQUIRE BHI KRNA HOGA
app.set("view engine","ejs")//yha dono   quote m hoga
app.set("views",path.join(__dirname,"/views"));//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(3000,()=>{
    console.log(" HURRAY! app is running on port:3000")
})