/**
 * Created by romario
 */

angular.module('pluggerApp').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go('home');
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../components/index/frontpage.html',
            controller: 'indexController'
        })

});

/*
angular.module('pluggerApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../components/index/frontpage.html',
            controller: 'indexController'
        })
        .otherwise({redirectTo: '/'})
});*/
