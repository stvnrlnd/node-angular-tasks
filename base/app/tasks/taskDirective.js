(function(){
  'use strict';
  angular.module('taskApp')
    .directive('taskDirective', function() {
      return {
        templateUrl: 'template/tasks/tasks.html',
        controller: 'taskController',
        replace: true
      };
    });
}());
