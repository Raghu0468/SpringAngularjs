//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("buttonsCtrl", function ($scope, $http) {
    $scope.msg = "";

    $http({
        method: 'GET',
        cache: true,
        url: "http://localhost:8081/buttons"
    }).then(function successCallback(response) {

        var resData = response.data;
//$scope.dashboard=resData;
        console.log("==");
        console.log(resData);
        console.log("==");

        var box1Res = resData[0];
        var fnlBox1 = box1Res.Box1;
        $scope.box1Contents = fnlBox1.Contents;
        $scope.l1name = fnlBox1.label1;
        $scope.l2name = fnlBox1.label2;
        $scope.bname = fnlBox1.label;


        var box2Res = resData[1];
        var fnlBox2 = box2Res.Box2;
        $scope.box2Contents = fnlBox2.Contents;
        $scope.box2Conten = fnlBox2.Content;
        $scope.box2Content = fnlBox2.Conten;
        $scope.box2data = fnlBox2.Contain;
        $scope.box2datas = fnlBox2.Contains;
        $scope.b2name = fnlBox2.label;

        var box3Res = resData[2];
        var fnlBox3 = box3Res.Box3;
        $scope.box3Contents = fnlBox3.Contents;
        $scope.box3Detail = fnlBox3.Content;
        $scope.box3Details = fnlBox3.Contain;
        $scope.box3Dataa = fnlBox3.Contains;
        $scope.b3name = fnlBox3.label;

        var box4Res = resData[3];
        var fnlBox4 = box4Res.Box4;
        $scope.box4Contents = fnlBox4.Contents;
        $scope.box4Content = fnlBox4.Content;
        $scope.b4name = fnlBox4.label;

        var box5Res = resData[4];
        var fnlBox5 = box5Res.Box5;
        $scope.box5Contents = fnlBox5.Contents;
        $scope.box5Conten = fnlBox5.contain;
        $scope.b5name = fnlBox5.label;

        var box6Res = resData[5];
        var fnlBox6 = box6Res.Box6;
        $scope.box6Contents = fnlBox6.Contents;
        $scope.box6Content = fnlBox6.Content;
        $scope.box6Contain = fnlBox6.Contain;
        $scope.box6Cont = fnlBox6.Cont;
        $scope.box6Conts = fnlBox6.Conts;
        $scope.box6Con = fnlBox6.Con;
        $scope.box6Data = fnlBox6.Connten;
        $scope.box6Datas = fnlBox6.Connt;
        $scope.box6Detail = fnlBox6.Connts;
        $scope.b6name = fnlBox6.label;

        var box7Res = resData[6];
        var fnlBox7 = box7Res.Box7;
        $scope.box7Contents = fnlBox7.Contents;
        $scope.b7name = fnlBox7.label;


    }, function errorCallback(response) {
//console.log(response);
        console.log('err');

    });
});