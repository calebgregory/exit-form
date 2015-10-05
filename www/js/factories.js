'use strict';

angular
  .module('exitInterview')
  .factory('Submission', ($http) => {
    return {
      form: {},
      submit: (form, cb) => {
        $http
          .post('/api/post', form)
          .success(cb);
      }
    };
  });
