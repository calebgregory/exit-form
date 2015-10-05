'use strict';

angular
  .module('exitInterview')
  .factory('Submission', ($http) => {
    return {
      submit: (form, cb) => {
        $http
          .post('/api/post', form)
          .success(cb);
      }
    };
  });
