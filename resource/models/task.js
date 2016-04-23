'use strict';
var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    text : String
});

module.exports = mongoose.model('Task', taskSchema);
