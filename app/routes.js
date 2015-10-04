'use strict';

var express = require('express');
var router  = express.Router();

var routes   = require('./routes/index');

router.get('/', routes.index);
router.get('/partials/:name', routes.partials);

module.exports = router;
