
myApp.controller("invoiceCtrl", function ($scope,$http) {

	
	$scope.fetchInvoiceList = function () {
        $http.get('http://localhost:9090/spring/invoice').then(function (response) {
        	
        	var resData=response.data;
        	console.log(resData);
        	

        	var resData=response.data[0];
        	var box=resData.Box;
        	$scope.labels=box.label1;
        	$scope.picons=box.iconic;
        	$scope.icons=box.icon;
        	$scope.labelI=box.label2;
        	$scope.labelID=box.invoiceid;
        	$scope.dateI=box.label3;
        	$scope.dateN=box.date;
        	 
        	var cuInfo=box.CInfo[0];
        	$scope.CInfoName=cuInfo.name;
        	$scope.CInfoIcon=cuInfo.icons;
        	$scope.CInfoLoop=cuInfo.loopdata;
        	$scope.tableHead=box.tableHead;
        	$scope.tableInData=box.tableInData;

        	var cpinfo=box.PInfo[0];
        	$scope.cpinfoNames=cpinfo.name1;
        	$scope.cpinfoIconss=cpinfo.icon;
        	$scope.cpinfoLoops=cpinfo.loopdata1;

        	var extrass=box.extra[0];
        	$scope.amountdata=extrass.Amount;
        	$scope.dolla=extrass.dollars;
        	$scope.colreds=extrass.color;
        	$scope.infiidot=extrass.duplicate;
        	$scope.dataenq=extrass.content;

        });
    };
    $scope.fetchInvoiceList();

});