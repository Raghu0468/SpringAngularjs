//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("galleryCtrl", function ($scope, $http) {

    $scope.gallerylist;
    $scope.editMode = false;

    $scope.fetchGalleryList = function () {
        $http.get('http://localhost:9090/spring/gallery').then(function (response) {

            console.log(response.data);

            $scope.gallerylist = response.data;
        });
    };
    $scope.fetchGalleryList();

});