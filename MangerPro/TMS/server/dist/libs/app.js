// Generated by CoffeeScript 1.12.7
(function() {
  var apiRouters, app, bodyParser, express, logger, path;

  express = require('express');

  path = require('path');

  logger = require('morgan');

  bodyParser = require('body-parser');

  apiRouters = require('./../routes/api');

  app = express();

  app.use(logger('dev'));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use('/api', apiRouters);

  app.use(function(req, res, next) {
    var err;
    err = new Error('Not Found');
    err.status = 404;
    return next(err);
  });

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      return res.send('error', {
        message: err.message,
        error: err
      });
    });
  }

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.send('error', {
      message: err.message,
      error: {}
    });
  });

  module.exports = app;

}).call(this);

//# sourceMappingURL=app.js.map
