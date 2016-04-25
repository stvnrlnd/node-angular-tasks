'use strict';
// ------ Require Packages
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// ------ Configure the application
var app            = express();
var port           = process.env.PORT || 3000;
var config         = require('./resource/config');
var api            = require('./resource/APIroutes');

app.use(methodOverride());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));

app.use('/api', api);

mongoose.connect(config.dbURL);

app.use(express.static(__dirname + '/base'));

// ------ Build routes
app.get('*', function(req, res) {
    res.sendfile('./base/template/index.html');
});

// ------ Serve
app.listen(port, function() {
  console.log("Running on port " + port);
});
