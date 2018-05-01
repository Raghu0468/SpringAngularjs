myApp.controller("tableCtrl", function ($scope, $http) {

	 $scope.fetchTableList = function () {
	        $http.get('table/simpledynamic.json').then(function (response) {

        var resData = response.data;
        
        console.log(resData);
        
        var box1Res = resData[0];
        
        var fnlBox1 = box1Res.Box1;
        $scope.box1data = fnlBox1.data;
        $scope.defaltWname = fnlBox1.label;

        var box2Res = resData[1];
        var fnlBox2 = box2Res.Box2;
        $scope.box2data = fnlBox2.data;
        $scope.jqee = fnlBox2.label;
        $scope.side = fnlBox2.label1;

	        });
	    };
	    $scope.fetchTableList();

	});