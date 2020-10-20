const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Henlo');
});

server.listen(3000);

console.log("Listening on :3000");
