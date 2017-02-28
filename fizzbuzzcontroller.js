var app = angular.module("lab18Module");
app.controller("fizzbuzzCtrl", function($scope, infoFactory) {
    $scope.answer;
    $scope.fizzults = function(num) {
        console.log(num);
        infoFactory.takeNumber(num);
        $scope.answer = infoFactory.inputReturn();
    }
} );
