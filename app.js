// const http = require('http');
// const routes = require('./routes');
// const server = http.createServer(routes);

// server.listen(3001);
//  Express
// const http = require('http');
// const routes = require('./routes');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send(
    '<form action = "/product" method="POST"><input type="text" name="title"></br></br><input type="number" name="quantity"></br></br><button type="submit">Add Product</button></form>'
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);    
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
