'use strict';

angular
  .module('exitInterview')
  .controller('FormCtrl', ($scope, Submission) => {
    var vm = $scope;

    vm.form = {};

    vm.submit = () => {
      var form = vm.form;

      form['fullName'] = `${form.firstName} ${form.lastName}`;
      Submission.submit(form, (data) => {
        console.log(data);
      });
    };

  });
