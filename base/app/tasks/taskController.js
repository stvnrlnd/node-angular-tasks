(function(){
  'use strict';
  angular.module('taskApp')
    .controller('taskController', function($scope, taskService) {
      $scope.createTask = function() {
        var task = {text: "New task."};
        $scope.tasks.unshift(task);
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
    });
}());
