angular.module('iHamilton.controllers', [])

iHamilton.controller('numbersCtrl', function ($scope) {})

iHamilton.controller('mapCtrl', function ($scope) {})

iHamilton.controller('diningCtrl', function ($scope) {})

iHamilton.controller('specCtrl', function ($http, $scope) {

    $scope.init = function () {
        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
                params: {
                    "v": "1.0",
                    // "q": "http://blog.nraboy.com/feed/"
                    "q": "http://students.hamilton.edu/rss/articles.cfm?item=A9AAF6B5-FB82-2ADF-26A75A82CDDD1221",
                    "num": "10"
                }
            })
            .success(function (data) {
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
                window.localStorage["entries"] = JSON.stringify(data.responseData.feed.entries);
            })
            .error(function (data) {
                console.log("ERROR: " + data);
                if (window.localStorage["entries"] !== undefined) {
                    $scope.entries = JSON.parse(window.localStorage["entries"]);
                }
            });
    }
    $scope.browse = function (v) {
        window.open(v, "_blank", "location=yes");
    }
})
