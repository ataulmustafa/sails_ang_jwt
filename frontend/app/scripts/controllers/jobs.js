'use strict';

angular.module('sailsAngJwtApp')
  .controller('JobsCtrl', function ($scope) {
    $scope.jobs = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
