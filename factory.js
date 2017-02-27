var app = angular.module("lab18Module");
var numberToFizzBuzz;

app.factory('infoFactory', function () {
    return {

        takeNumber: function (numberToFizzBuzz) {
            $scope.numberToFizzBuzz = numberToFizzBuzz;
var reply;
            var i = numberToFizzBuzz;
            if (i % 3 === 0 && i % 5 === 0) {
               reply = 'FizzBuzz! ' + i;
            } else if (i % 3 === 0) {
                reply = 'Fizz! ' + i;
            } else if (i % 5 === 0) {
                reply = 'Buzz! ' + i;
            } else {
                reply = i;
            }
            return reply;
        }

    }
});



//    
//    var userInfo = {};
//    return {
//        sentInfo: function (numberToFizzBuzz) {
//            userInfo = numberToFizzBuzz;
//        },
//        getInfo: function () {
//            return userInfo;
//        }
//    }
//
//});
