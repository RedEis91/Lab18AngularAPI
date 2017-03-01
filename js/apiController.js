var app = angular.module("lab18Module");
app.controller('apiCtrl', function ($scope, $location, apiFactory, infoFactory) {
$scope.robotz = apiFactory.responseBody();
$scope.
