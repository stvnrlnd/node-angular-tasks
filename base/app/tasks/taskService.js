(function(){
  'use strict';
  angular.module('taskApp')
    .service('taskService', function($http) {
      this.getTasks = function(callback) {
        $http.get('api/tasks')
        .then(callback);
      };
      this.createTask = function(task) {
        var newTask = $http.post('/api/tasks', task)
          .then(function(result){
            task._id = result.data.task._id;
            return task._id;
          });
        console.log("Created!");
      };
      this.updateTask = function(task) {
        $http.put('/api/tasks/' + task._id, task)
          .then(function(result) {
            task = result.data.task;
            return task;
          });
        console.log("Saved!");
      };
      this.deleteTask = function(task) {
        $http.delete('/api/tasks/' + task._id, task);
        console.log("Deleted!");
      };
    });
}());
