const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("server is running at port : 3000");
});
app.get("/Aboutus", function(req, res){
    res.send("This is khizar hussain mohammed");
});
app.get("/ContactUs", function(req, res){
    res.send("My email address : khussain7@gmail.com");
});
app.get("/Calculator", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/Calculator", function(req, res){
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1+n2;
    res.send("The sum for" + sum);
});

app.listen(3000, function(req, res) {
    console.log("server is running at port : 3000");
    // res("server is running at port : 3000");
});
