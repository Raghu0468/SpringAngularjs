myApp.controller("calendarCtrl", function ($scope, $http) { 
	
	$scope.fetchCalendarList = function () {
    $http.get('calendar/calendar.json').then(function (response) {

    	var resData=response.data;
    	console.log(resData);

    	var resData=response.data[0];
    	var box=resData.Events;
    	$scope.label=box.label;
    	$scope.lab=box.data;

    	var drags=box.eInfo[0];
    	$scope.eInfoColor=drags.color1;
    	$scope.eInfoLabel=drags.label1;
    	$scope.eInfoIcon=drags.icon1;
    	$scope.eInfoName=drags.name1;

    	var drags=box.eInfo[1];
    	$scope.eInfoc=drags.color2;
    	$scope.eInfol=drags.label2;
    	$scope.eInfoo=drags.icon2;
    	$scope.eInfon=drags.name2;

    	var drags=box.eInfo[2];
    	$scope.eInfoa=drags.color3;
    	$scope.eInfob=drags.label3;
    	$scope.eInfoe=drags.icon3;
    	$scope.eInfod=drags.name3;

    	var drags=box.eInfo[3];
    	$scope.eInfoCoor=drags.color4;
    	$scope.eInfoLael=drags.label4;
    	$scope.eInfoIon=drags.icon4;
    	$scope.eInfoNme=drags.name4;

    	var drags=box.eInfo[4];
    	$scope.eInfoClor=drags.color5;
    	$scope.eInfoLbel=drags.label5;
    	$scope.eInfoIn=drags.icon5;
    	$scope.eInfoNa=drags.name5;

    	var drags=box.eInfo[5];
    	$scope.eInfoCr=drags.color6;
    	$scope.eInfoLl=drags.label6;
    	$scope.eInfoIcons=drags.icon6;
    	$scope.eInfoNames=drags.name6;

    	var drags=box.eInfo[6];
    	$scope.eInfoColors=drags.color7;
    	$scope.eInfoLabels=drags.label7;
    	$scope.eInfoIconi=drags.icon7;
    	$scope.eInfoNamei=drags.name7;
    	
    });
};
$scope.fetchCalendarList();

});