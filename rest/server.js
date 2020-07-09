
// Dependencies

var express = require('express'); 
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser'); 

// MongoDB
mongoose.connect('mongodb://34.215.247.160/rest_test'); 

// Express
var app = express(); 
app.use(bodyParser.urlencoded({ useUnifiedTopology: true })); 
app.use(bodyParser.json()); 

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000); 
console.log('API is running on port 3000'); 

