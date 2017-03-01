var app = angular.module(‘myModule’, []);

app.directive('helloWorld', function(){
  return{
    restrict: "CAME",
    template: '<img src="img/banner-angularjs.jpg" alt="angular banner">',
    replace: false
  };

});
