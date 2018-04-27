myApp.controller("dCtrl", function ($scope, $http) {

    $scope.msg;
    $scope.boxes;
    $scope.completion;
    $scope.SaleStats;
    $scope.Conversation;

    $scope.fetchDList = function () {
        $http.get('dashboard/box.json').then(function (response) {

            var resData = response.data;

            console.log(resData);

            var boxRes = resData[0];
            var fnlBox = boxRes.boxes;
            $scope.boxes = fnlBox;


            var Com = resData[1];
            var fnlCom = Com.Completion;
            console.log(fnlCom);
            $scope.completion = fnlCom;

            var converse = resData[6];
            var inconver = converse.conversation;
            console.log(inconver);
            $scope.Conversation = inconver;


        });
    };
    $scope.fetchDList();

});