var piggyApp = angular.module('piggyApp', []);

piggyApp.controller('TestCtrl', function ($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
  ];
});
