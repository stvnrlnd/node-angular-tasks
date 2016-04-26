(function(){
  'use strict';
  angular.module('taskApp')
    .controller('taskController', function($scope, taskService) {
      taskService.getTasks(function(response) {
        $scope.tasks = response.data;
        console.log(response.data);
      });
      $scope.createTask = function() {
        var task = $scope.task;
        taskService.createTask(task);
        $scope.tasks.unshift(task);
      };
      $scope.updateTask = function(task) {
        taskService.updateTask(task);
      };
      $scope.deleteTask = function(task, $index) {
        taskService.deleteTask(task);
        $scope.tasks.splice($index, 1);
      };
    });
}());
