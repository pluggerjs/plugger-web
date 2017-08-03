
angular.module('pluggerApp').controller('indexController', function ($scope, $route, $location, ModuleService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.formData = {};

    $scope.modules = [];

	$scope.getModules = function() {
		ModuleService.getModules().then(function(result) {
            $scope.modules = [];

            result.forEach(function (module) {
                $scope.modules.push(module);
            });
		});
	};

	$scope.findByName = function () {
	    $scope.modules = [];
	    if ($scope.formData.name) {
            ModuleService.getModules().then(function (result) {
                result.forEach(function (module) {
                    if(module.name.toString().indexOf($scope.formData.name) >= 0) {
                        $scope.modules.push(module);
                    }
                });
            });
        } else {
	        $scope.getModules();
        }

    }

	
});