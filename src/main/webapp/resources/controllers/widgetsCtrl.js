
//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("widgetsCtrl", function ($scope,$http) {
	console.log("harish");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/widgets"
}).then(function successCallback(response) {

var resData=response.data;
//$scope.dashboard=resData;


console.log("==");
console.log(resData);
console.log("saiii");
console.log("==");

/*box1*/
var box1Res=resData[0];
var fnlBox1=box1Res.Box1;
$scope.box1Contents=fnlBox1.Contents;
$scope.defaltWname=fnlBox1.label;

//console.log($scope.box1);
/*box1*/

/*box2*/
var box2Res=resData[1];
var fnlBox2=box2Res.Box2;
console.log(fnlBox2)
$scope.box2name=fnlBox2.label;
$scope.box2data=fnlBox2.data;
console.log($scope.box2data);
//$scope.box2=resData;
/*box2*/

/*box3*/
var box3Res=resData[2];
var fnlBox3=box3Res.Box3;
//$scope.box1Contents=fnlBox1.Contents;
$scope.defaltWname=fnlBox3.label;

//console.log($scope.box1);
/*box3*/


/*big header*/
var box4Res=resData[3];
var fnlBox4=box4Res.Box4;
$scope.box4Contents=fnlBox4.Contents;
$scope.dename=fnlBox4.label;
/*big header*/


/*big header*/
var box5Res=resData[4];
var fnlBox5=box5Res.Box5;
$scope.box5Progress=fnlBox5.Progress;
$scope.box5Contents=fnlBox5.Contents;
$scope.dename=fnlBox5.label;
/*big header*/

/*With Badge*/
var box6Res=resData[5];
var fnlBox6=box6Res.Box6;
$scope.box6Warnings=fnlBox6.Warnings;
$scope.box6Contents=fnlBox6.Contents;
$scope.title=fnlBox6.label;
/*With Badge*/

/*Box7*/
var box7Res=resData[6];
var fnlBox7=box7Res.Box7
//$scope.box7progress=fnlBox7.progress;
$scope.hari=fnlBox7.progress;
$scope.box7Contents=fnlBox7.Contents;
$scope.title=fnlBox7.label;
/*Box7*/

/*Box8*/
var box8Res=resData[7];
var fnlBox8=box8Res.Box8;
console.log("sri");
console.log(fnlBox8);
//$scope.box8progress_bar=fnlBox8.progress_bar;
$scope.progress=fnlBox8.progress;
$scope.haaa=fnlBox8.lines;
$scope.box8Contents=fnlBox8.Contents;
$scope.content=fnlBox8.label;
/*Box8*/

/*Box9*/
var box9Res=resData[8];
var fnlBox9=box9Res.Box9
//$scope.box8progress_bar=fnlBox8.progress_bar;
$scope.bttn=fnlBox9.Arrow;
$scope.butn=fnlBox9.Arrows;
$scope.buton=fnlBox9.Button1;
$scope.buttn=fnlBox9.Button2;
//$scope.haaa=fnlBox9.lines;
$scope.box9Contents=fnlBox9.Contents;
$scope.header=fnlBox9.label;
/*Box9*/

var box10Res=resData[9];
var fnlBox10=box10Res.Box10;
//$scope.box13Contents=fnlBox13.Contents;
$scope.def=fnlBox10.label; 

var box11Res=resData[10];
console.log('harish ###');
console.log(box11Res);
var fnlBox11=box11Res.Box11;
$scope.box11Contents=fnlBox11.Contents;
$scope.dtname=fnlBox11.label;



/*scroll tabs data*/
console.log("S********");
console.log(resData);
var scrolltabs=resData[11];
var tabRes=scrolltabs.Tabswithscorll;

$scope.label=tabRes.label;
$scope.home=tabRes.home;
$scope.profile=tabRes.profile;
$scope.info=tabRes.info;
/*scroll tabs data*/

var box12Res=resData[12];
var fnlBox12=box12Res.Box12;
$scope.box12Contents=fnlBox12.Contents;
$scope.ddtname=fnlBox12.label;



}, function errorCallback(response) {
//console.log(response);
console.log('err');

});
});