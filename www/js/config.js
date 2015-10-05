'use strict';

angular
  .module('exitInterview')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index',
      })
      .when('/form', {
        templateUrl: 'partials/form',
        controller: 'FormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/confirm', {
        templateUrl: 'partials/confirm',
        controller: 'ConfirmCtrl',
        controllerAs: 'ctrl'
      })
      .when('/exit', {
        templateUrl: 'partials/exit',
        controller: 'ExitCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
