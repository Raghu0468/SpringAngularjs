myApp.controller("typographyCtrl", function ($scope,$http) {
	console.log("name");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/typography"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);
console.log("data");


var box1Res=resData[0];
var fnlBox1=box1Res.Box1;
$scope.box1Contents=fnlBox1.Contents;
$scope.lbels=fnlBox1.label1;
$scope.lhds=fnlBox1.label2;
$scope.labhds=fnlBox1.label3;

var box2Res=resData[1];
var fnlBox2=box2Res.Box2;
$scope.box2Contents=fnlBox2.Contents;
$scope.box2Content=fnlBox2.Content;
$scope.box2Cont=fnlBox2.Cont;
$scope.box2Contain=fnlBox2.Contain;
$scope.box2Contains=fnlBox2.Contains;
$scope.box2Con=fnlBox2.Con;
$scope.label=fnlBox2.label;

var box3Res=resData[2];
var fnlBox3=box3Res.Box3;
$scope.box3Contents=fnlBox3.Contents;
$scope.box3Content=fnlBox3.Content;
$scope.box3Cont=fnlBox3.Cont;
$scope.label=fnlBox3.label;

var box4Res=resData[3];
var fnlBox4=box4Res.Box4;
$scope.box4Contents=fnlBox4.Contents;
$scope.label=fnlBox4.label;

var box5Res=resData[4];
var fnlBox5=box5Res.Box5;
$scope.box5Contents=fnlBox5.Contents;
$scope.label=fnlBox5.label;

}, function errorCallback(response) {
console.log('err');

});
});
