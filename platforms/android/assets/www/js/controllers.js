'use strict';

/* Controllers */

angular.module('piggyApp.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {
  	$scope.testData = "Hello World from Home Controller";
  }])
  .controller('feedbackCtrl', ['$scope', function($scope) {
		$scope.testData = "Hello World from Feedback Controller";
	}])
	.controller('settingsCtrl', ['$scope', function($scope) {
  	$scope.testData = "Hello World from Settings Controller";
	}])
	.controller('splashCtrl', ['$scope', function($scope) {
  	$scope.testData = "Hello World from Splash Controller";
	}]);
