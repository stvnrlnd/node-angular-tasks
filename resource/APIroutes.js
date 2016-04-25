'use strict';
var express  = require('express');
var api      = express.Router();
var Task     = require('./models/task');

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

module.exports = api;
