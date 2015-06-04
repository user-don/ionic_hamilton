// Ionic iHamilton App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'iHamilton' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'iHamilton.services' is found in services.js
// 'iHamilton.controllers' is found in controllers.js
var iHamilton = angular.module('iHamilton', ['ionic', 'iHamilton.controllers', 'iHamilton.services', 'ngSanitize'])

.run(function ($ionicPlatform, $rootScope, $location) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      // make statusbar not overlay webview upon startup
      StatusBar.overlaysWebView(false);
      // set default style for bar (black text on off-white background)
      StatusBar.styleDefault();
    }
    $rootScope.RSS = "http://students.hamilton.edu/rss/articles.cfm?item=A9AAF6B5-FB82-2ADF-26A75A82CDDD1221";


  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.numbers', {
    url: '/numbers',
    views: {
      'tab-numbers': {
        templateUrl: 'templates/tab-numbers.html',
        controller: 'numbersCtrl'
      }
    }
  })

  .state('tab.dining', {
    url: '/dining',
    views: {
      'tab-dining': {
        templateUrl: 'templates/tab-dining.html',
        controller: 'diningCtrl'
      }
    }
  })

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tab.spec', {
    url: '/spec',
    views: {
      'tab-spec': {
        templateUrl: 'templates/tab-spec.html',
        controller: 'specCtrl'
      }
    }
  })

  .state('tab.specEntry', {
    url: '/specentry/:index',
    views: {
      'tab-spec': { // the view is tab-spec because called from spec page
        controller: 'specEntryCtrl',
        templateUrl: 'templates/tab-specentry.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/numbers');

});
