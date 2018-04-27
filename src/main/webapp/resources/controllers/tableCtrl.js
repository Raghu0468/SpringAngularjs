//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("tableCtrl", function ($scope, $http) {
    console.log("name");
    $scope.msg = "";

    $http({
        method: 'GET',
        cache: true,
        url: "http://localhost:8081/simpledynamic"
    }).then(function successCallback(response) {

        var resData = response.data;
        console.log("==");
        console.log(resData);
        var box1Res = resData[0];
        console.log(box1Res);
        var fnlBox1 = box1Res.Box1;
        $scope.box1data = fnlBox1.data;
        $scope.defaltWname = fnlBox1.label;

        var box2Res = resData[1];
        var fnlBox2 = box2Res.Box2;
        $scope.box2data = fnlBox2.data;
        $scope.jqee = fnlBox2.label;
        $scope.side = fnlBox2.label1;

    }, function errorCallback(response) {
//console.log(response);
        console.log('err');

    });
});