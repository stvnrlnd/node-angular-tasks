(function(){
  'use strict';
  angular.module('taskApp')
    .service('taskService', function($http) {
      this.getTasks = function(callback) {
        $http.get('app/mock/tasks.json')
          .then(callback);
      };
      this.saveTask = function(task) {
        console.log("Saved!");
        // TODO: Make this work
      };
      this.deleteTask = function(task) {
        console.log("Deleted!");
        // TODO: Make this work
      };
    });
}());