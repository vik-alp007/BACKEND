// now  if i want to install figlet in my folder simply npm i figlet kr do 
// sirf ek dependencies hojaengi add figlet naaam ki 
const giveMeAJoke = require("give-me-a-joke");

giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke);
});