const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = "8000";
const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

//set view engin as hbs, pug or ejs
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);
//change default views to new folder name

app.set("views",templatePath);

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
    res.render("aboutus",{
        cahnelName : "Khizar",
        pageName : "Muneeb",
        Link1 : "Test"
    });
    });

app.listen(port, () => {
console.log("port started at 8000");
});