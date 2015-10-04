'use strict';

angular
  .module('exitInterview')
  .controller('IndexCtrl', ($scope, $http) => {
    var vm = $scope;

    vm.people = [
      {
        name: 'bill beaux',
        age: 111
      },
      {
        name: 'fro deaux',
        age: 43
      }
    ];
  });
