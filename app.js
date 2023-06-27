'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4000;

const pokeapiRouter = require('./routers/pokeapi');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});

app.use('/api', pokeapiRouter);

app.listen(port, () => {
  console.log('El servidor se está ejecutando en el puerto' + port);
});
