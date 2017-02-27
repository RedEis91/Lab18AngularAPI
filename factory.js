var app = angular.module("lab18Module");
app.factory('infoFactory', function () {
    
    
    
    
    
    
    var userInfo = {};
    return {
        sentInfo: function (numberToFizzBuzz) {
            userInfo = numberToFizzBuzz;
        },
        getInfo: function () {
            return userInfo;
        }
    }

});
