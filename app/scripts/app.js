'use strict';

/**
 * @ngdoc overview
 * @name finalProjectApp
 * @description
 * # finalProjectApp
 *
 * Main module of the application.
 */
angular
  .module('finalProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
