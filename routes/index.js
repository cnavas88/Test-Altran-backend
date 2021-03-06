'use strict';

var express             = require('express');
var jwtAuthMiddleware   = require('../middleware/jwtAuthMiddleware');

var app = express();

// Add swagger for doc api


app.use( jwtAuthMiddleware.jwtAuth );

app.use('/', require('./guest'));
app.use('/', require('./auth'));
app.use('/', require('./admin'));

app.all('*', (req, res) => 
{
    res.status(404).json({
        success: false,
        message: 'ERROR: Resource not found.'
    });
});

/*app.use( (err, req, res, next) => 
{
    res.status(err.status).json({
        success: false,
        message: err.message
    });
});*/

module.exports = app;