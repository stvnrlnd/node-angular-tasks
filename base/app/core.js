(function(){
  'use strict';
  angular.module('taskApp', [])
    .controller('taskController', function($scope, taskService) {
      taskService.getTasks(function(response) {
        console.log(response.data);
        $scope.tasks = response.data;
      });
    })
    .service('taskService', function($http) {
      this.getTasks = function(callback) {
        $http.get('app/mock/tasks.json')
          .then(callback);
      };
    });
}());
