'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        // abstract: true
      }).state('details', {
        url: '/details/',
        templateUrl: 'views/details.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        params: {
           module: {
             value: 'defaultValue',
           }
          //  hiddenParam: 'YES',
         },
      });
    $urlRouterProvider.otherwise('/');

  });
