const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require('requests');
const port = "8000";
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const imagePath = path.join(__dirname,"../public/Images")
const cssPath = path.join(__dirname,"../public/css")
const jsPath = path.join(__dirname,"../public/js")

//set view engin as hbs, pug or ejs
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);
//change default views to new folder name

app.set("views",templatePath);

app.use(express.static(imagePath));
app.use(express.static(cssPath));
app.use(express.static(jsPath));
//app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
res.render("index",{
    cahnelName : "Khizar",
    pageName : "Muneeb",
    Link1 : "Test"
});
});

app.get("/aboutus", (req, res) => {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=b5da410f1781b5fb1aad30d307354d59`)
            .on('data',  (chunk) => {
              //  console.log(chunk);
            const objData = JSON.stringify(chunk);
            const arrData = [objData];
           
            // const realTimeDate = arrData.map(val => replaceVal(homeFile, val)).join("");
             res.write(arrData[0]);
            })
            .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            //console.log('end');
            res.end();
            });
    });

app.get("*", (req, res) =>{
res.render("errorpage");
});   

app.listen(port, () => {
console.log("port started at 8000");
});