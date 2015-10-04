'use strict';

exports.submit = (req, res) => {

  console.log(req.body);
  res.send('hello');
}
