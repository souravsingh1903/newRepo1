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

const adminRoutes = require('./router/admin')

const shopRoutes  = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).send('<h1>Page Not found</h1>');
})

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
