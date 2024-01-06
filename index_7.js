const fs = require('fs')
const http = require('http')
const url = require('url')


// Server
const server = http.createServer((req, res) => {
    const pathName = req.url;
    //res.end('Hello from server!');
    if (pathName === '/' || pathName === "/overview"){
        res.end('This is overview')
    } else if (pathName === '/product')
    {
        res.end('This is product')
    } else
    {
        res.writeHead(404, {
            'Content-type' : 'text/html', 
            'my-own-header' : "hello-world"
        });
        res.end('<h1> Page requested not found </h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
});