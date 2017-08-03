
angular.module('pluggerApp').controller('indexController', function ($scope, $route, $location, ModuleService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.formData = {};
    $scope.empty = true;

    $scope.modules = {};
    $scope.modules.lista = [];


	$scope.getModules = function() {
		ModuleService.getModules().then(function(result) {
            $scope.modules.lista = [];

            if (result || result !== "") {
                $scope.empty = false;

                result.forEach(function (module) {
                    $scope.modules.lista.push(module);
                });
            } else {
                $scope.empty = true;
            }

		});
	};

	$scope.findByName = function () {
        $scope.modules.lista = [];
	    if ($scope.formData.name) {
            ModuleService.getModules().then(function (result) {
                $scope.empty = true;
                result.forEach(function (mocs) {
                    if(mocs.name.toString().indexOf($scope.formData.name) >= 0) {
                        $scope.empty = false;
                        $scope.modules.lista.push(mocs);
                    }
                });
            });
        } else {
	        $scope.getModules();
        }
        $scope.formData.name = "";
    }
    $scope.getModules();


	
});