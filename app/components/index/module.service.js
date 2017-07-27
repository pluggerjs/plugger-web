angular.module('pluggerApp').service('ModuleService', function($http) {
	var services = {};
	services.getModules =  function() {
		return new Promise(function(resolve, reject) {
            // $http.get('/modules', function (res) {
				// console.log("esse é o res", res);
            // });
			var module = {
				name: "moduleR"
			}
			return resolve(module);
		});
	};
	return services;
});