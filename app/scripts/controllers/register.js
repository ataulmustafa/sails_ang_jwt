'use strict';
angular.module('sailsAngJwtApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(){
    	console.log('submitted');
    }
  });
