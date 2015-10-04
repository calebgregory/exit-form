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
      .otherwise({
        redirectTo: '/'
      });
  });
