'use strict';

angular
  .module('exitInterview')
  .controller('FormCtrl', ($scope) => {
    var vm = $scope;

    vm.form = {};

    vm.submit = () => {
      console.log(vm.form);
    }

  });
