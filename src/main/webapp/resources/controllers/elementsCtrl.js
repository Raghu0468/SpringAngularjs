myApp.controller("elementsCtrl", function ($scope, $http) {
    console.log("name");
    $scope.msg = "";

    $http({
        method: 'GET',
        cache: true,
        url: "http://localhost:8081/elements"
    }).then(function successCallback(response) {

        var resData = response.data;
        console.log(resData);
        console.log("data");

        var resData = response.data[0];


    }, function errorCallback(response) {
//console.log(response);
        console.log('err');

    });
});