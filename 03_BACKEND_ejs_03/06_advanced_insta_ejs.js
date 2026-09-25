
const express = require("express")
const app = express()
app.set("view engine", "ejs")//ejs as a template engine
const path = require("path")//🔥require is a package therefore  requiring it
app.set("views", path.join(__dirname, "/views")) //🔥//HUM VIEWS WALE FOLDER KA PATH YH PE DEFINE KER RHE HAI
app.get("/:username", (req, res) => {
  let {username} = req.params
  let instaData = require("./07_data.json")//data ko require kr liye "file" wala jo pdha tha usi concept se !
  //  console.log(instaData)
  let data = instaData[username];
  // 🔥ek bohot hi imp baat if username url mein cat daala toh terminal p kuch nhi aaega bcz json data m keys m "cats " hai 
  console.log(data)//issee data terminal p print hoga
  if(data){
  res.render("05_insta.ejs", {data})}
  else{
    res.render("./06_error.ejs")
  }
  // yha pe pura insta data ko acess nhi krna chahte hai sirf jo search box m type krega usi data ko show krwan hai 
})
app.listen(8080, () => {
  console.log("app is runnings on 8080")
})
