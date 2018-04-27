var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $location, $http) {
    $scope.username = "";
    $scope.password = "";
    $scope.submit = function () {
        window.location.href = "/spring/header";
    }
});
		