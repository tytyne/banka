var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("hello world");
    res.end('Hello World!');
}).listen(8080);
