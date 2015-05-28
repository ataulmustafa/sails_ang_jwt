'use strict';
angular.module('sailsAngJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert,authToken) {
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
      console.log(user);
    	$http.post(url, user)
	    	.success(function (res){
	    		console.log('done');
            authToken.setToken(res.token);
          alert('success', 'Account Created!', ' Welcome, ' + res.user.email + '!');
	    	})
	    	.error(function(err){
	    		console.log(err);
	    		alert('warning', 'Oops', ' Could not register');
	    	});
    }
  });