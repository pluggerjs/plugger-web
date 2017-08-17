'use strict';

/**
 * @ngdoc service
 * @name App.moduleService
 * @description
 * # moduleService
 * Service in the App.
 */
angular.module('App')
  .service('moduleService', function ($http) {
    var services = {};

    services.getModules =  function() {
      return new Promise(function(resolve, reject) {
        $http.get('http://localhost:3000/modules').then(function (res) {
          if (res.status === 200) {
            var keys = Object.keys(res.data);
            var result = [];

            for (var i = 0; i < keys.length; i++) {
              result.push(res.data[keys[i]]);
            }

            return resolve(result);
          } else {
            return reject(res.data);
          }
        },
        function(err) {
          return reject(err)
        });
      });
    };

    return services;
  });
