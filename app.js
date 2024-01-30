const http = require('http');
const routes = require('./routes');
console.log("nodemon working");
const server = http.createServer(routes);

server.listen(3001);
