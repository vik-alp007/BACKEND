// here we will study ki how ek folder ka data ek , files access krskti hai jiska folder diff hai .
// abhi tk export files pdha tha ab export directory 
// s1: make a folder 
// note: module.exports ek object hota hai , module.exports={
// key: "value"
// }
// 🔥humne index .css mein array bnake as a element sare files ko require kar lia 
// yha pe puri directory🔥 ko as variable require kr lo
const obj=require("./fruits")//yha pe puri puri directory ka naam lilho 
console.log(obj);