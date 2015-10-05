'use strict';

angular
  .module('exitInterview')

  .controller('FormCtrl', ($scope, $location, Submission) => {
    var vm = $scope;

    vm.form = Submission.form;

    vm.next = () => {
      Submission.form = vm.form;
      $location.path('/confirm');
    };
  })

  .controller('ConfirmCtrl', ($scope, $location, Submission) => {
    var vm = $scope;

    vm.form = Submission.form;

    vm.edit = () => {
      $location.path('/form')
    }

    vm.submit = () => {
      Submission.submit(vm.form, data => {
        // what if data is null?
        Submission.form = data;
        $location.path('/exit');
      });
    }
  })

  .controller('ExitCtrl', ($scope, Submission) => {
    var vm = $scope;

    vm.data = Submission.form;
  });
