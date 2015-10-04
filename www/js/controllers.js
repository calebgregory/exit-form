'use strict';

angular
  .module('exitInterview')
  .controller('FormCtrl', ($scope) => {
    var vm = $scope;

    vm.form = {};

    vm.submit = () => {
      var form = vm.form;

      form['fullName'] = `${form.firstName} ${form.lastName}`;
      console.log(form);
    };

  });
