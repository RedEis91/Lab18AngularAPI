var app = angular.module("lab18Module", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/input', {
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