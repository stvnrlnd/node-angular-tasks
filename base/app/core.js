(function(){
  'use strict';
  angular.module('taskApp', [])
    .controller('taskController', function($scope, taskService) {
      $scope.createTask = function() {
        var task = {text: "New task."};
        $scope.tasks.push(task);
      };
      taskService.getTasks(function(response) {
        console.log(response.data);
        $scope.tasks = response.data;
      });
      $scope.saveTask = function(task) {
        taskService.saveTask(task);
      };
      $scope.deleteTask = function(task, $index) {
        taskService.deleteTask(task);
        $scope.tasks.splice($index, 1);
      };
    })
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
