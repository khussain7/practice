const http = require('http');
const fs = require('fs');
var requests = require('requests');
const { json } = require('stream/consumers');
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempval , orgVal) =>{
   console.log(orgVal.weather[0].main);
    let tempurature = tempval.replace("{%tempval%}", orgVal.main.temp);
    tempurature = tempurature.replace("{%tempmin%}", orgVal.main.temp_min);
    tempurature = tempurature.replace("{%tempmax%}", orgVal.main.temp_max);
    tempurature = tempurature.replace("{%country%}", orgVal.sys.country);
    tempurature = tempurature.replace("{%location%}", orgVal.name);
    tempurature = tempurature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return tempurature;
};

const server = http.createServer((req , res) => {
  if(req.url = "/"){
    requests('https://api.openweathermap.org/data/2.5/weather?id=7535661&appid=b5da410f1781b5fb1aad30d307354d59')
        .on('data',  (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData);
        const realTimeDate = arrData.map(val => replaceVal(homeFile, val)).join("");
        res.write(realTimeDate);
        })
        .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        //console.log('end');
        res.end();
        });
  }
});

server.listen(8000, "127.0.0.1");