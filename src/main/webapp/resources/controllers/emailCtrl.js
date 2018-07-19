
myApp.controller("emailCtrl", function ($scope,$http) {

	$scope.fetchEmailList = function () {
        $http.get('http://localhost:9090/spring/email').then(function (response) {
        	
        
var resData=response.data;
console.log(resData);

var box1Res=resData[0];
var fnlBox1=box1Res.Box1;

$scope.box1Contents=fnlBox1.Contents;
$scope.defname=fnlBox1.label;
$scope.sname=fnlBox1.label1;

        });
    };
    $scope.fetchEmailList();

});