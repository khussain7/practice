const fs = require("fs");
const readline = require('readline');


//fs.mkdirSync("TextData");

//fs.writeFileSync("TextData/bio.txt", "Name : khizar");

//fs.appendFileSync("TextData/bio.txt", "\nAge : 37");

//fs.appendFileSync("TextData/bio.txt", "\nPorfessional : Application Developer");

// async function processLineByLine() {
// const fileStream = fs.createReadStream("TextData/bio.txt");

// const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.

//   for await (const line of rl) {
//     // Each line in input.txt will be successively available here as `line`.
//     console.log(`Line from file: ${line}`);
//   }
// }

// processLineByLine();

//fs.renameSync("TextData/bio.txt", "TextData/Mybio.txt");
//fs.unlinkSync("TextData/Mybio.txt");
fs.rmdirSync("TextData");


