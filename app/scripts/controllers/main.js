'use strict';

jQuery.support.cors = true;
jQuery.ajaxSetup({
    xhrFields: {
        withCredentials: true   // Pass session cookie with requests
    }
});

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('MainCtrl', function ($scope, moduleService) {
    $scope.empty = true;

    $scope.modules = [];
    $scope.clicou = false;

    function getModules() {
      moduleService.getModules().then(function(result) {
        $scope.modules = result;
        $scope.empty = !(result && result.length > 0);

        $scope.$apply();
      });
    };

    getModules();
  });
