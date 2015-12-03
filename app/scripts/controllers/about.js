'use strict';

/**
 * @ngdoc function
 * @name finalProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the finalProjectApp
 */
angular.module('finalProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
