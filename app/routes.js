'use strict';

var express = require('express');
var router  = express.Router();

var routes   = require('./routes/index');
var api      = require('./routes/api');

router.get('/', routes.index);
router.get('/partials/:name', routes.partials);

router.post('/api/post', api.submit);

module.exports = router;
