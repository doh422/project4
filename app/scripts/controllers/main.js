'use strict';

/**
 * @ngdoc function
 * @name finalProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectApp
 */
angular.module('finalProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
