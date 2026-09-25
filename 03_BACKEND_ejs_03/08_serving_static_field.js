// IF WE WANT TO SEND CSS,JS AS TEMPLATE JUST LIKE WE SEND HTML.

const express = require("express")
const app = express()
const path = require("path")//🔥require is a package therefore  requiring it
// 👇🔥niche dekho ssf ka💻
// app.use(express.static(path.join(__dirname,"/public")))




//hmesa public naam ka folder  hi hoga 
// PATH.JOIN IS DONE JUST LIKE WE HAD DONE FOR VIEW SO THAT WE CAN RUN IT FROM PARENT DIRECTORY
// 💁‍♂️HUM "PUBLIC" KE ANDAR MULTIPLE FOLDER BNA SKTE HAI THEN UNHE BHI SERVE KR SKTTE HAI BUS "/public " ki jagah "/public/css" kardo and phir 2nd line m "/public/js" kardo.
app.use(express.static(path.join(__dirname,"/public/css")))
app.use(express.static(path.join(__dirname,"/public/js")))
app.set("view engine", "ejs")//ejs as a template engine
app.set("views", path.join(__dirname, "/views")) //🔥//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
app.get("/:username", (req, res) => {
  let {username} = req.params
  let instaData = require("./07_data.json")//data ko require kr liye "file" wala jo pdha tha usi concept se !
  //  console.log(instaData)
  let data = instaData[username];
  // 🔥ek bohot hi imp baat if username url mein cat daala toh terminal p kuch nhi aaega bcz json data m keys m "cats " hai 
  console.log(data)//issee data terminal p print hoga
  if(data){
  res.render("07_insta.ejs", {data})}
  else{
    res.render("./06_error.ejs")
  }
  // yha pe pura insta data ko acess nhi krna chahte hai sirf jo search box m type krega usi data ko show krwan hai 
})
app.listen(8080, () => {
  console.log("app is runnings on 8080")
})
// 🔥NOTE: HMESA PATH REQUIRE KRO PHIR USKO USE KRO PEHLE PATH REQUIRE KA CODE LIKHO PHIR PATH USE KA CODE LIKHO
// 🔥NOTE: PATH JOIN AND REQUIRE PATH KA KAAM HOTA HAI KI PARENT DIRECTORY SE CODE KO TERMINAL P RUN KRE SKE 