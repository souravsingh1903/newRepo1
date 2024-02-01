
const Product = require('../models/product');
const path = require('path');
const rootDir = require('../util/path');

 exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views','add-product.html'));
  }


  exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title); 
    product.save();  
    res.redirect("/");
  }

  exports.getProducts =  ( req, res, next) => {
    const products = Product.fetchAll()
    console.log(products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

