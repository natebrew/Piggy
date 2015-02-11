'use strict';


// Declare app level module which depends on filters, and services
angular.module('piggyApp', [
  'ngRoute',
  'piggyApp.filters',
  'piggyApp.services',
  'piggyApp.directives',
  'piggyApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html', 
    controller: 'homeCtrl'});
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html', 
    controller: 'homeCtrl'});
  $routeProvider.when('/feedback', {templateUrl: 'views/feedback.html', controller: 'feedbackCtrl'});
  $routeProvider.when('/settings', {templateUrl: 'views/settings.html', controller: 'settingsCtrl'});
  $routeProvider.when('/splash', {templateUrl: 'views/splash.html', controller: 'splashCtrl'});

  $routeProvider.otherwise({redirectTo: '/'});
}]);
