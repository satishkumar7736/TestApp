(fucntion(){
var app = angular.module("myApp",[]);
  app.service("myservice",function(mulfactory){
     this.service = function(){
	     this.result= mulfactory.fact;
	 }
  });

})();