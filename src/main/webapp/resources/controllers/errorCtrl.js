
myApp.controller("errorCtrl", function ($scope,$http) {
	
	$scope.fetchErrorList = function () {
        $http.get('http://localhost:9090/spring/error404').then(function (response) {

var resData=response.data;
console.log(resData);

var resData=response.data[0].Box;
var header=resData.header[0];
$scope.code=header.code;
$scope.headIcon=header.icon;
$scope.headMsg=header.msg;
$scope.paragraph=resData.paragraph;

var header=resData.fields[0];
console.log();
$scope.btnIcon=header.icon;
$scope.btnPlace=header.placeholder;
$scope.btnName=header.btnName;

$scope.sub_head=resData.sub_head;
$scope.sub_head_loop=resData.sub_head_loop;


var btn1=resData.btn1[0];
$scope.btn1Icon=btn1.icon;
$scope.btn1Name=btn1.btnName;

var btn2=resData.btn2[0];
$scope.btn2Icon=btn2.icon;
$scope.btn2Name=btn2.btnName;


        });
    };
    $scope.fetchErrorList();

});