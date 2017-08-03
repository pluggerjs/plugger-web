angular.module('pluggerApp').service('ModuleService', function($http) {
	var services = {};
	services.getModules =  function() {
		
		return new Promise(function(resolve, reject) {
            $http.get('http://localhost:8000/modules').then(function (res) {
				if (res.status === 200) {
                    return resolve(JSON.parse(res.data));
				} else {
					return reject(JSON.parse(res.data));
				}

            },
			function(err) {
				return reject(err)
			});
		});
	};
	return services;
});