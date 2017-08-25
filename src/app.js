const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico')));

app.use('/', index);
app.use('/users', users);
app.use('/public', express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.render('404', { title: 'Express' });
});

// development error handler
// will print stacktrace
if (process.env.NODE_ENV == 'development') {
  app.use((err, req, res, next) => {
    res.status(err.code || 500)
      .json({
        status: 'error',
        message: err,
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message,
    });
});

module.exports = app;
