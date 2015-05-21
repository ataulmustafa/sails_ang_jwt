'use strict';

/**
 * @ngdoc function
 * @name sailsAngJwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the sailsAngJwtApp
 */
angular.module('sailsAngJwtApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
