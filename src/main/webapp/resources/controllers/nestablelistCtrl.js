myApp.controller("nestablelistCtrl", function ($scope,$http) {
	console.log("name");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/nestablelist"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);




}, function errorCallback(response) {
//console.log(response);
console.log('err');

});
});