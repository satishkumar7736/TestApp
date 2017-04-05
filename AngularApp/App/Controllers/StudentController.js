(function(){
	var app = angular.module("myApp",[])
     .controller("studentController",function($scope,myservice){
        $scope.name="ravi";
		
		$scope.getdata= function(){
			alert("hello");
	     $scope.endresult= myservice.service;
		}
 });
})()