const fs = require('fs')
const http = require('http')

// Server
const server = http.createServer((req, res) => {
    //console.log(req);
    res.end('Hello from server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
});