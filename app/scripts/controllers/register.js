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
    	var url = '/';
    	var user = {};
    	$http.post(url, user)
	    	.success(function (res){
	    		console.log('done');
	    	})
	    	.error(function(err){
	    		console.log(err);
	    		alert('warning', 'Oops', ' Could not register');
	    	});
    }
  });