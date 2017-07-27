
angular.module('pluggerApp').controller('indexController', function ($scope, $route, $location, ModuleService) {
    $scope.title = 'Texto de meu controller';
    $scope.$route = $route;
    $scope.$location = $location;
	
	$scope.modules = {};
	
	$scope.getModules = function() {
		ModuleService.getModules().then(function(res) {
			$scope.module = res;
		});
	};
	
});