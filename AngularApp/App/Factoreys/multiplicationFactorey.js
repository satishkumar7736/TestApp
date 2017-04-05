(function(){
    var app = angular.module("myApp",[]);
     app.factory("mulfactory",function(){
		 var fact ={};		 
		 fact.users =['jhone','jake','praveen'];
		 return fact;
	 });
})();