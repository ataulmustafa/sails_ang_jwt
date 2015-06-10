'use strict';
angular.module('sailsAngJwtApp').config(function($urlRouterProvider, $stateProvider, $httpProvider){

	// If not found, go to root
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('main',{
		url: '/',
		templateUrl: '/views/main.html'
	})

	.state('register',{
		url: '/register',
		templateUrl: '/views/register.html',
		controller: 'RegisterCtrl'
	})

	.state('jobs',{
		url: '/jobs',
		templateUrl: '/views/jobs.html',
		controller: 'JobsCtrl'
	})
    
	.state('logout',{
		url: '/logout',
		controller: 'LogoutCtrl'
	});
    
    // Push token by using interceptors
    $httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL','http://localhost:3000/');