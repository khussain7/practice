const httpserver = require("http");

const server = httpserver.createServer((req, res) => {
res.end("Welcome to node server!");
});

server.listen(8000, "127.0.0.1", ()=> {
    console.log("lisiting to the port 8000");
});