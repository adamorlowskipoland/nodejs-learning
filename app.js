const http = require('http');
const fs = require('fs');

const server = http.createServer(((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const obj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29,
  };
  res.end(JSON.stringify(obj));
}));

server.listen(3000, '127.0.0.1');
console.log('Server is listening on port 3000');
