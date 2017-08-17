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
  .controller('MainCtrl', function ($scope,moduleService) {
    var self = this;

    self.clicou = false;

    function getModules() {
      moduleService.getModules().then(function(result) {
        self.modules = result;
        $scope.$apply();
      });
    };

    getModules();
  });
