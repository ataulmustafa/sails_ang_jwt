'use strict';

angular.module('sailsAngJwtApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
    
    $http.get(API_URL + 'jobs').success(function(jobs){
        $scope.jobs = jobs;
    }).error(function(err){
        alert('Warning', "Unable to get jobs", err.message);
    });
    
    $scope.jobs = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
