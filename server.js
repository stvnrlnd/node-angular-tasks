'use strict';
// ------ Require Packages
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// ------ Configure the application
var app            = express();
var api            = express.Router();
var port           = process.env.PORT || 3000;
var config         = require('./resource/config');
var Task             = require('./resource/models/task');

app.use(methodOverride());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));

mongoose.connect(config.dbURL);

app.use(express.static(__dirname + '/base'));

// ------ Build routes
api.route('/tasks')
  .get(function(req, res) {
    Task.find(function(err, tasks) {
      if (err){
        res.send(err);
      }
      res.json(tasks);
    });
  })
  .post(function(req, res) {
    Task.create({
      text : req.body.text,
      done : false
    }, function(err, task) {
      if (err){
        res.send(err);
      }
      Task.find(function(err, tasks) {
        if (err){
          res.send(err);
        }
        res.json(tasks);
      });
    });
  });

api.route('/tasks/:task_id')
  .delete(function(req, res) {
    Task.remove({
      _id : req.params.task_id
    }, function(err, task) {
      if (err){
        res.send(err);
      }
      Task.find(function(err, tasks) {
        if (err){
          res.send(err);
        }
        res.json(tasks);
      });
    });
  });

app.use('/api', api);

// ------ Serve
app.listen(port, function() {
  console.log("Running on port " + port);
});
