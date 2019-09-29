const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/readme.txt`, 'utf8');
const writeStream = fs.createWriteStream(`${__dirname}/writeme.txt`,);
readStream.on('data', chunk => {
  console.log('New chunk received');
  writeStream.write(chunk);
});


// const server = http.createServer(((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World! Send from a server');
// }));
//
// server.listen(3000, '127.0.0.1');
// console.log('Server is listening on port 3000');
