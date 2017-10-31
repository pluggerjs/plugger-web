'use strict';

jQuery.support.cors = true;
jQuery.ajaxSetup({
  xhrFields: {
    withCredentials: true // Pass session cookie with requests
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
  .controller('MainCtrl', function($scope, moduleService,$stateParams) {
    var self = this;

    self.clicou = false;
    self.module = $stateParams.module;
    self.getModules = function() {
      moduleService.getModules().then(function(result) {
        self.modules = result;
        console.log(self.modules);
        
        $scope.$apply();
      });
    };

    self.setSelected = function(module) {
      self.selected = module;
    };

    self.getSelected = function() {
      console.log("teste");
      return self.selected;
    }

    self.getModules();
  });
