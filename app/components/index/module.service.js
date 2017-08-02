angular.module('pluggerApp').service('ModuleService', function($http) {
	var services = {};
	services.getModules =  function() {
		
		return new Promise(function(resolve, reject) {
            $http.get('http://localhost:8000/modules').then(function (res) {
				console.log("esse é o res", res);
				return resolve(res.data);
            },
			function(err) {
				return reject(err)
			});
		});
	};
	return services;
});