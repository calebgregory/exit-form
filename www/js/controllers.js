'use strict';

angular
  .module('exitInterview')

  .controller('FormCtrl', function($scope, $location, Submission) {
    var vm = $scope;

    vm.form = Submission.form;

    vm.next = function() {
      Submission.form = vm.form;
      $location.path('/confirm');
    };
  })

  .controller('ConfirmCtrl', function($scope, $location, Submission) {
    var vm = $scope;

    vm.form = Submission.form;

    vm.edit = function() {
      $location.path('/form')
    }

    vm.submit = function() {
      Submission.submit(vm.form, function(data) {
        // what if data is null?
        Submission.form = data;
        $location.path('/exit');
      });
    }
  })

  .controller('ExitCtrl', function($scope, Submission) {
    var vm = $scope;

    vm.data = Submission.form;
  });
