
myApp.controller("jquiCtrl", function ($scope,$http) {
	console.log("harini");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/jqueryui"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);
console.log("data");


var box1Res=resData[0];
var fnlBox1=box1Res.Box1;
$scope.box1Contents=fnlBox1.Contents;
$scope.box1Content=fnlBox1.Content;
$scope.bname=fnlBox1.label;
$scope.b1name=fnlBox1.labels;

var box2Res=resData[1];
var fnlBox2=box2Res.Box2;
$scope.box2Contents=fnlBox2.Contents;

var box3Res=resData[2];
var fnlBox3=box3Res.Box3;
$scope.box3Contents=fnlBox3.Contents;
$scope.box3Content=fnlBox3.Content;

var box4Res=resData[3];
var fnlBox4=box4Res.Box4;
$scope.box4Contents=fnlBox4.Contents;
$scope.box4Content=fnlBox4.Content;
$scope.box4Cont=fnlBox4.Cont;
$scope.box4Conts=fnlBox4.Conts;

var box5Res=resData[4];
var fnlBox5=box5Res.Box5;
$scope.box5Contents=fnlBox5.Contents;

var box6Res=resData[5];
var fnlBox6=box6Res.Box6;
$scope.box6Contents=fnlBox6.Contents;

var box7Res=resData[6];
var fnlBox7=box7Res.Box7;
$scope.box7Contents=fnlBox7.Contents;

var box8Res=resData[7];
var fnlBox8=box8Res.Box8;
$scope.box8Contents=fnlBox8.Contents;

var box9Res=resData[8];
var fnlBox9=box9Res.Box9;
$scope.box9Contents=fnlBox9.Contents;


var box10Res=resData[9];
var fnlBox10=box10Res.Box10;
$scope.box10Contents=fnlBox10.Contents;
// $scope.box10Cont=fnlBox10.Cont;




}, function errorCallback(response) {
console.log('err');

});
});