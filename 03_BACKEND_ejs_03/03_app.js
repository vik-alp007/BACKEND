// yha pe hum interpolation syntax pdhenge KAISE TAG KA USE KRKE EJS KO DYNAMIC BNA SKTE HAI (run time data k acc chale)

const express=require("express")
const app=express()
const path=require("path")//YEH EK PACKAGE HAI ,THEREFORE REQUIRE BHI KRNA HOGA
app.set("view engine","ejs")//yha dono   quote m hoga//ejs ko aisa a template usse kro aisa kh rha hai 
app.set("views",path.join(__dirname,"/views"));//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
app.get("/",(req,res)=>{
    res.render("02_home.ejs")
})
app.listen(3000,()=>{
    console.log(" HURRAY! app is running on port:3000")
})