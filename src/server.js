'use strict';

var express = require('express');
var method_override = require('method-override');
var body_parser = require('body-parser');
var config = require('../config');
var port = process.env.PORT || 3000;

var app = express();

// Configuration
app.use('/lib', express.static(config.path.build));
app.use('/styles', express.static(config.path.styles));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(method_override());

// Routes
require('./routes.js')(app);

// Server Init
app.listen(port, function(){
	console.log('Listening on port:\t%d', port);
});