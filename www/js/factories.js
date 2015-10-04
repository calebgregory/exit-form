'use strict';

angular
  .module('exitInterview')
  .factory('Submission', ($http) => {
    return {
      submit: (form, cb) => {
        console.log('form within factory:',form);
        $http
          .post('/api/post', form)
          .success(cb);
      }
    };
  });
