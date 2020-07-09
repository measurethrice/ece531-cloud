// Dependencies
var express = require('express'); 
var router = express.Router(); 

// Models
var Product = requrie('../models/product'); 

// Routes
Product.methods(['get', 'put', 'post', 'delete']); 
Product.register(router, '/products'); 

// Return router
module.exports = router; 
