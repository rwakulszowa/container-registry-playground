const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.end('Henlo from the server');
});

server.listen(3000);

console.log("Listening on :3000");
