'use strict';

var Submission = require('../models/Submission');

exports.submit = (req, res) => {
  var form = req.body;

  Submission.submit(req.body, (err, data) => {
    if(err) throw err;
    res.send(data);
  });
};
