const figlet = require("figlet");

figlet("VIKALP", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }

    console.log(data);
});
// agr galti se node modules delete hojae toh(npm install) likhne se reinstall hojaenge