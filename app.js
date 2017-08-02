const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const routes = require('./routes/index');

const app = express();

// view engine setup
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.use('/', routes);




app.listen(8000);

module.exports = app;