var app = angular.module("lab18Module");
app.factory('apiFactory', function() {
        return {
            $.get({
                url: 'https://robohash.p.mashape.com/index.php?text=fizzbuzz',
                headers: {
                    "X-Mashape-Key": "lOInYNzHQ2mshMjc4ErlgCx8FjcNp1IwEUHjsnGVFb2yp1SelN",
                    "Accept": "application/json"
                }
            }, function(responseBody) {
                console.log(responseBody);
            });

        }};
);
