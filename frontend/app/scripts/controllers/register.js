'use strict';
angular.module('sailsAngJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(){
    	console.log('submitted')
    	var url = 'http://localhost:3000/register';
    	var user = {
        email: $scope.email,
        password: $scope.password
      };
    	$http.post(url, user)
	    	.success(function (res){
	    		console.log('done');
          alert('success', 'Ok', ' You are now registered');
	    	})
	    	.error(function(err){
	    		console.log(err);
	    		alert('warning', 'Oops', ' Could not register');
	    	});
    }
  });