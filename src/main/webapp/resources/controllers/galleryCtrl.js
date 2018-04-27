//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("galleryCtrl", function ($scope, $http) {

    $scope.gallerylist;
    $scope.editMode = false;

    $scope.fetchGalleryList = function () {
        $http.get('gallery/items.json').then(function (response) {

            console.log(response.data);

            $scope.gallerylist = response.data;
        });
    };
    $scope.fetchGalleryList();

});