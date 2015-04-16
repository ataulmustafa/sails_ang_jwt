'use strict';

/**
 * @ngdoc service
 * @name sailsAngJwtApp.alert
 * @description
 * # alert
 * Service in the sailsAngJwtApp.
 */
angular.module('sailsAngJwtApp')
  .service('alert', function ($rootScope, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function(type, title, message, timeout){
    	$rootScope.alert = {
    		hasBeenShown: true,
    		show: true,
    		type: type,
    		message, message,
    		title: title
    	};
    	
    	alertTimeout = $timeout(function(){
    		$rootScope.alert.show = false;
    	}, timeout || 2000);

    	$timeout.cancel(alertTimeout);
    }
  });
