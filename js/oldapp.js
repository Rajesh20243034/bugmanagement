var myapp = angular.module("myapp",['ngRoute']);


myapp.service('consta', function(){
	this.const = "Rajesh patel";
});

myapp.service('cityService',function(){
	this.city = "Gurgaon";
});
//Angular Routing
myapp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when("/",{
		templateUrl:"pages/home.php",
		controller:"homeCtrl"
	}).
		when("/list",{
			templateUrl:"pages/list.php",
			controller:"listCtrl"
		}).
			when("/listadd",{
				templateUrl:"pages/listadd.php",
				controller:"listaddCtrl"
			});
}]);

//Angular Directive

myapp.directive("myform",function(){
	return {
		restrict:"E",
		templateUrl:"directives/form.html"
	}
});

//List Controllers

myapp.controller("homeCtrl",['$scope','$log',function($scope,$log){
	$scope.hometext = "Simple words for home page with home controller";

}]);

myapp.controller("listCtrl",['$scope','$log',function($scope,$log){
	$scope.listtext = "Simple angular route in list page";
}]);

myapp.controller("listaddCtrl",['$scope','$log','consta','cityService',function($scope,$log,consta,cityService){
	$scope.logintest = function(){
		alert("You are "+consta.const+" and You Lives in "+cityService.city);
	}

}]);

myapp.controller("loginform",['$scope',function($scope){
	$scope.loginform = function(){
		alert("You are trying to submit your form");
	};
}]);




