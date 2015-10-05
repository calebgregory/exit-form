'use strict';

angular
  .module('exitInterview')
  .factory('Submission', function($http) {
    return {
      form: {},
      submit: function(form, cb) {
        $http
          .post('/api/post', form)
          .success(cb);
      }
    };
  });
