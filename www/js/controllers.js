angular.module('iHamilton.controllers', [])

iHamilton.controller('numbersCtrl', function ($scope) {})

iHamilton.controller('mapCtrl', function ($scope) {})

iHamilton.controller('diningCtrl', function ($scope) {
  var diningArray = [
    // commons
    ["Daily: 7:30am-4pm, 5-8pm", "* Breakfast grill closes at 10am M-F",
     "* Brunch served 11am-2pm Sat-Sun"], // array of 4
    // mcewen
    [
     "M: 7:30am-2:30pm, 4:30-8pm",
     "T: 7:30am-2:30pm, 4:30-8pm",
     "W: 7:30am-2:30pm, 4:30-8pm",
     "T: 7:30am-2:30pm, 4:30-8pm",
     "F: 7:30am-2:30pm (CLOSED for dinner)",
     "S: CLOSED",
     "S: CLOSED"],
    // diner
    [
     "M: 9am-Midnight",
     "T: 9am-11am",
     "W: 9am-11am",
     "T: 9am-Midnight, 12:30-4am",
     "F: 9am-Midnight, 12:30-4am",
     "S: 3pm-Midnight, 12:30-4am",
     "S: 3pm-Midnight, 12:30-4am"],
    // pub
    ["M: 11:30am-1pm (lunch)",
     "T: 11:30am-1pm (lunch), 8pm-2am",
     "W: 11:30am-1pm (lunch), 8pm-2am",
     "T: 11:30am-1pm (lunch), 8pm-2am",
     "F: 11:30am-1pm (lunch), 4pm-2am",
     "S: 8pm-2am (nite)",
     "S: CLOSED"],

    // opus 1
    ["M: 8:30am-4:30pm, 7:30pm-11:30pm",
     "T: 8:30am-4:30pm, 7:30pm-11:30pm",
     "W: 8:30am-4:30pm, 7:30pm-11:30pm",
     "T: 8:30am-4:30pm",
     "M: 8:30am-3:30pm",
     "S: CLOSED",
     "S: 7:30pm-11:30pm"],

    // opus 2
    ["M: 8:30am-4:30pm, 7:30pm-11:30pm",
     "T: 8:30am-4:30pm, 7:30pm-11:30pm",
     "W: 8:30am-4:30pm, 7:30pm-11:30pm",
     "T: 8:30am-4:30pm",
     "M: 8:30am-3:30pm",
     "S: CLOSED",
     "S: 7:30pm-11:30pm"]
  ];
  var diningLocations = [
    "Commons",
    "McEwen",
    "Diner",
    "The Pub",
    "Opus I",
    "Opus II"
  ];

  var today = new Date().getDay();
  // now set "today" so that monday is at index 0
  today = (today - 1 % 6 == -1 ? 6 : today - 1);

  var todayHoursVar = [];
  // commons hours for today
  todayHoursVar.push(today < 5 ? // M-F, else weekend
     "   7:30am-4pm, 5-8pm" :
     "   7:30am-4pm, 5-8pm. Brunch from 11am-2pm");
  // all others conform with index, so we can pull from diningArray
  for (var i=1; i < 6; i++) { // i iterates through diningArray index
    todayHoursVar.push(diningArray[i][today]);
  }

  $scope.todayHours = todayHoursVar;


  $scope.groups = [];
  for (var i = 0; i < 6; i++) {
    $scope.groups[i] = {
      // name: i,
      theIndex: i, // the $index was acting srangely in tab-dining.html
      name: diningLocations[i],
      items: [],
      show: false
    };
    // here is where we add data (eventually from JSON database I think)
    $scope.groups[i].items.push(diningArray[i]);

  }
  // if given group is selected group, deselect it
  // else, select the given group
  $scope.toggleGroup = function (group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function (group) {
    return group.show;
  };

})

iHamilton.controller('specCtrl', function ($http, $scope) {
  // executed upon loading of controller, which occurs on tab load
  // (as specified in $stateProvider)
  $scope.init = function () {
    var theFeed = $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
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
    // until I can figure out how to actually pull text from a URL using an internal library,
    // I'm using the amazing tool provided at http://boilerpipe-web.appspot.com/
    window.open("http://boilerpipe-web.appspot.com/extract?url=" + v + "&output=htmlFragment", "_blank", "location=yes,toolbar=yes");
    console.log(v);
  }
})
