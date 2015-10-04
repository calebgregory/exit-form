'use strict';

angular
  .module('exitInterview')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
