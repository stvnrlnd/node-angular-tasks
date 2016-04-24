(function(){
  'use strict';
  angular.module('taskApp', [])
    .controller('taskController', function($scope) {
      $scope.tasks = [
        {"text": "Code"},
        {"text": "Code more"},
        {"text": "Drink Coffee"},
      ]
    });
}());
