'use strict';

/**
 * @ngdoc service
 * @name sailsAngJwtApp.authToken
 * @description
 * # authToken
 * Factory in the sailsAngJwtApp.
 */
angular.module('sailsAngJwtApp')
  .factory('authToken', function ($window) {
    // Service logic
    var storage = $window.localStorage;
    var cachedToken;
    var userToken = 'token';
    // Public API here
    var authToken = {
        setToken: function (token) {
            cachedToken = token;
            storage.setItem(userToken, token);
        },
        getToken: function(){
            if(!cachedToken)
                cachedToken = storage.getItem(userToken);
            return cachedToken;
        },
        isAuthenticated: function(){
            return !!authToken.getToken();
            // !! sign=> takes results, cast to bool type and then inverses it.
        },
        removeToken: function(){
            cachedToken = null;
            storage.removeItem(userToken);
        }
    };
    return authToken;
  });
