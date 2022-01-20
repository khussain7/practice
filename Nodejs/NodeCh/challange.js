const fs = require("fs");
const readline = require('readline');

async function CreateFile(filename, textappend){
    fs.writeFileSync(filename, textappend);
}

async function AppendDataToFile(filename, textappend){
    fs.appendFileSync(filename, "\n"+textappend);
}

async function ReadFileData(filename){
    const fileStream = fs.createReadStream(filename);
    return fileStream;
}

async function DeleteFile(filename){

}

async function RenameFile(filename, newfilename){

}
