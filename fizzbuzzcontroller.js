var app = angular.module("lab18Module");

var numberToFizzBuzz;

app.controller('fizzbuzzCtrl', function ($scope, $location) {
    $scope.takeNumber = function (numberToFizzBuzz) {
        infoFactory.sentInfo(numberToFizzBuzz);
        $scope.numberToFizzBuzz = numberToFizzBuzz;
        console.log(numberToFizzBuzz);


        var i = numberToFizzBuzz;

            if (i % 3 === 0 && i % 5 === 0) {
               console.log('FizzBuzz');
            } else if (i % 3 === 0) {
                console.log('Fizz')
            } else if (i % 5 === 0) {
                console.log('Buzz')
            } else {
                console.log(i);

        
    
}
}});

//services.factory('jodaTextResource', ["$http", function($http) {
//    var FINAL_API_URL = "https://yoda.p.mashape.com/yoda?sentence=";
//    return {
//        jodaTalks: jodaTalks
//    };
//    
//    function jodaTalks(encodedText) {
//        var configHeaders = {
//            headers: {
//                "X-Mashape-Key": 'M1KccTAioumshASRIvSyBSmSVvNMp1bYAU9jsn5uMoQOEcPzA9'
//        }
//                  
//    };
//     return $http.get(FINAL_API_URL + encodedText, configHeaders).then(function(jodaSpeech){
//         return jodaSpeech;
//     }, function() {
//         throw new Error("Error Retrieving the joda speech");
//     
//     });   
//    }
//}]);


//
//          app.controller('yodaCtrl', function ($scope, $http) {
//    //function using GET method of $http request within the controller to getData from JSON object.
//                function getData () {
//                    $http({
//                        url: "https://yoda.p.mashape.com",
//                        method: 'GET',
//                        "X-Mashape-Key": 'Lw5bZLZz87msh99ZcJV9qXgyghK4p11CBu9jsnwShd4EdksO6c',
//                        "Accept": "text/plain"
//                    })
//                    //promise function, if the mission is Successful, place children of JSON object inside posts variable
//                        .then(
//                        function missionSuccess(response) {
//                          $scope.pulledData = response;
//                          console.log(response);
//                          
//                        },
//                        function (error) {
//                            console.log(error);
//                        });
//                }
//                getData();
//            });
