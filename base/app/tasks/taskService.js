(function(){
  'use strict';
  angular.module('taskApp')
    .service('taskService', function($http) {
      this.getTasks = function(callback) {
        $http.get('api/tasks')
        .then(callback);
      };
      this.createTask = function(task) {
        $http.post('/api/tasks', task);
        console.log("Created!");
      };
      this.updateTask = function(task) {
        $http.put('/api/tasks/' + task._id, task);
        console.log("Saved!");
      };
      this.deleteTask = function(task) {
        $http.delete('/api/tasks/' + task._id, task);
        console.log("Deleted!");
      };
    });
}());
