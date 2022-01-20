const fs = require("fs");

// create new file
//fs.writeFileSync("read.txt", "Welcome to node tutorials");

//fs.appendFileSync("read.txt", "Writing next line!");


// const alldata = fs.readFileSync("read.txt"); // this is auto ready data in binary language

// console.log(alldata.toString()); 

//rename to file

fs.renameSync("read.txt", "readwrite.txt");