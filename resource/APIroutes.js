'use strict';
var express  = require('express');
var api      = express.Router();
var Task     = require('./models/task');

api.route('/tasks')
  .post(function(req, res) {
    var task = new Task();
    task.text = req.body.text;
    task.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Task created!', 'task' : task });
    });
  })
  .get(function(req, res) {
    Task.find(function(err, tasks) {
      if (err){
        res.send(err);
      }
      res.json(tasks);
    });
  });

api.route('/tasks/:task_id')
  .get(function(req, res) {
    Task.findById(req.params.task_id, function(err, task) {
      if (err){
        res.send(err);
      }
      res.json(task);
    });
  })
  .put(function(req, res) {
    Task.findById(req.params.task_id, function(err, task) {
      if (err){
        res.send(err);
      }
      task.text = req.body.text;
      task.save(function(err) {
        if (err){
          res.send(err);
        }
        res.json({ message: 'Task updated!' });
      });
    });
  })
  .delete(function(req, res) {
    Task.remove({
      _id : req.params.task_id
    }, function(err, task) {
      if (err){
        res.send(err);
      }
      res.json({ message: 'Task deleted!' });
    });
  });

module.exports = api;
