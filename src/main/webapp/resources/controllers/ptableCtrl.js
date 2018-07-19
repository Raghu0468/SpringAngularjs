
myApp.controller("ptableCtrl", function ($scope, $http) {
	
		$scope.fetchPricingtableList = function () {
			$http.get('http://localhost:9090/spring/pricing').then(function (response) {
        	
var resData=response.data;
console.log(resData);

var box1Res=resData[0];
var fnlBox1=box1Res.Box1;
$scope.box1Contents=fnlBox1.Contents;
$scope.defname=fnlBox1.label;
$scope.fname=fnlBox1.lab;
$scope.fsname=fnlBox1.h1;
$scope.b1=fnlBox1.hh1;

var box2Res=resData[1];
var fnlBox2=box2Res.Box2;
$scope.box2Contents=fnlBox2.Contents;
$scope.dname=fnlBox2.label;
$scope.lname=fnlBox2.lab2;
$scope.l2name=fnlBox2.h2;
$scope.b2=fnlBox2.hh2;

var box3Res=resData[2];
var fnlBox3=box3Res.Box3;
$scope.box3Contents=fnlBox3.Contents;
$scope.ddname=fnlBox3.label;
$scope.l3name=fnlBox3.lab3;
$scope.l3ame=fnlBox3.h3;
$scope.b3=fnlBox3.hh3;

var box4Res=resData[3];
var fnlBox4=box4Res.Box4;
$scope.box4Contents=fnlBox4.Contents;
$scope.dename=fnlBox4.label;
$scope.l4name=fnlBox4.lab4;
$scope.l4ame=fnlBox4.h4;
$scope.b4=fnlBox4.hh4;

var box5Res=resData[4];
var fnlBox5=box5Res.Box5;
$scope.box5Contents=fnlBox5.Contents;
console.log("name");
console.log($scope.box5Contents);
$scope.d1=fnlBox5.label;
$scope.l5name=fnlBox5.lab5;
$scope.l5ame=fnlBox5.h5;
$scope.b5=fnlBox5.hh5;

var box6Res=resData[5];
var fnlBox6=box6Res.Box6;
$scope.box6Contents=fnlBox6.Contents;
$scope.d2=fnlBox6.label;
$scope.l6name=fnlBox6.lab6;
$scope.l6ame=fnlBox6.h6;
$scope.b6=fnlBox6.hh6;

var box7Res=resData[6];
var fnlBox7=box7Res.Box7;
$scope.box7Contents=fnlBox7.Contents;
$scope.d3=fnlBox7.label;
$scope.l7name=fnlBox7.lab7;
$scope.l7ame=fnlBox7.h7;
$scope.b7=fnlBox7.hh7;

var box8Res=resData[7];
var fnlBox8=box8Res.Box8;
$scope.box8Contents=fnlBox8.Contents;
$scope.d4=fnlBox8.label;
$scope.l8name=fnlBox8.lab8;
$scope.l8ame=fnlBox8.h8;
$scope.b8=fnlBox8.hh8;

var box9Res=resData[8];
var fnlBox9=box9Res.Box9;
$scope.box9Contents=fnlBox9.Contents;
$scope.d5=fnlBox9.label;
$scope.l9name=fnlBox9.lab9;
$scope.l9ame=fnlBox9.h9;
$scope.b9=fnlBox9.hh9;

var box00Res=resData[9];
var fnlBox00=box00Res.Box00;
console.log("fnlBox00");
$scope.box00Contents=fnlBox00.Contents;
$scope.dd4=fnlBox00.label;
$scope.ds4=fnlBox00.lael;

        });
 };
 $scope.fetchPricingtableList();

});