'use strict';
angular.module('sailsAngJwtApp').config(function($urlRouterProvider, $stateProvider){

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
	});
})