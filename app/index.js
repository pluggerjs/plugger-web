
angular.module('pluggerApp').controller('MainCtrl', function($scope, $interval, $http) {
    $scope.arr = [];
    var stop = $interval(function() {
        $http.get('http://localhost:3000')
            .then(function(res) {
                $scope.arr = res.data.arr;
            }, function(e) {
                console.error(e);
            });
    }, 3000);
});