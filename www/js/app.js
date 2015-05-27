// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('iHamilton', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// Set up state machine
.config(function($stateProvider, $urlRouterProvider) {
      // AngularUI Router
      // Set up various states the app can be in
      $stateProvider

      // set up abstract state for the tabs directive
      // so tabs are the highest level of state
          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
          })

      // Each tab has its own nav history "stack"
          .state('tab.numbers', {
            url: '/numbers',
            views: {
              'tab-numbers': {
                templateUrl: 'templates/tab-numbers.html',
                controller: 'numbersCtrl'
              }
            }
          })

        // Each tab has its own nav history "stack"
          .state('tab.dining', {
            url: '/dining',
            views: {
              'tab-dining': {
                templateUrl: 'templates/tab-dining.html',
                controller: 'diningCtrl'
              }
            }
          })

        // Each tab has its own nav history "stack"
          .state('tab.map', {
            url: '/map',
            views: {
              'tab-map': {
                templateUrl: 'templates/tab-map.html',
                controller: 'mapCtrl'
              }
            }
          })

        // Each tab has its own nav history "stack"
          .state('tab.spec', {
            url: '/spec',
            views: {
              'tab-dining': {
                templateUrl: 'templates/tab-spec.html',
                controller: 'specCtrl'
              }
            }
          });

      // Default state (if none of other states are matched)
      $urlRouterProvider.otherwise('/tab/numbers');


    });
