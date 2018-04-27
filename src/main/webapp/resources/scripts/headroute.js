var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	
		.when('/gallery', {
			templateUrl: 'views/gallery.html'
		});
});

