angular.module('pluggerApp').service('ModuleService', function($http) {
	var services = {};
	services.getModules =  function() {
		return new Promise(function(resolve, reject) {
			var module = {
				name: "moduleR"
			}
			return resolve(module);
		});
	};
	return services;
});