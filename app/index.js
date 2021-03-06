'use strict';

var bodyParser  = require('body-parser');
var express     = require('express');
var less        = require('less-middleware');
var morgan      = require('morgan');

var app     = module.exports = express();

var routes  = require('./routes');

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname +'/views');
app.set('view engine', 'jade');

app.use(less('www'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended : true,
  type     : '*/x-www-form-urlencoded'
}));
app.use(bodyParser.json());

app.use(express.static('www'));
app.use('/', routes);

require('../lib/errorHandler/');

var server = app.listen(app.get('port'));
