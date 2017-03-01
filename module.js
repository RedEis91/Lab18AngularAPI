var app = angular.module("lab18Module", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/ngFizzBuzz', {
        controller: 'fizzbuzzCtrl',
        templateUrl: 'input.html'
    })
    .when('/output', {
        controller: 'fizzbuzzCtrl',
        templateUrl: 'output.html'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('');
});


app.directive("logoBogo", function() {
    return {
        restrict: "EA",
        replace: true,
        template: "<img src='banner-angularjs.jpg' alt='Tony Hawk' height=25% width=25%>"
    }
});
  