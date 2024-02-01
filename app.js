// const http = require('http');
// const routes = require('./routes');
// const server = http.createServer(routes);

// server.listen(3001);
//  Express
// const http = require('http');
// const routes = require('./routes');

const path = require('path');
const express = require("express");

const errorController = require('./controllers/error');

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./router/admin')

const shopRoutes  = require('./router/shop');

const contactRoutes = require('./router/contactus');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(errorController.error404);


app.listen(3000);
