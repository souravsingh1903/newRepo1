const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {

  if (req.url === '/node') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to my Node Js project</h1></body></html>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to About Us page</h1></body></html>');
  } else if (req.url === '/home') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome home</h1></body></html>');
  } else {
    // Handle unknown routes with a 404 status code
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>404 Not Found</h1></body></html>');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
