'use strict';

/**
 * @ngdoc directive
 * @name sailsAngJwtApp.directive:validateEquals
 * @description
 * # validateEquals
 */
angular.module('sailsAngJwtApp')
  .directive('validateEquals', function () {
    return {
      require: 'ngModel',
      // To access dom elements, we use link
      link: function(scope,element,attrs,ngModelCtrl){
      	function validateEqual(value){
      		var valid = (value === scope.$eval(attrs.validateEquals));
      		ngModelCtrl.$setValidity('equal', valid);
      		return valid ? value : undefined;
      	}
      	ngModelCtrl.$parsers.push(validateEqual);
      	ngModelCtrl.$formatters.push(validateEqual);

      	scope.$watch(attrs.validateEquals, function(){
      		ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
      	})

      }
    };
  });
