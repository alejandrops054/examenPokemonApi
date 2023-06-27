'use strict';
const express = require('express');
const pokeapiController = require('../controllers/pokeapiController');
const api = express.Router();

api.get('/getParametros', pokeapiController.getParameters);
api.get('/getPokemontList', pokeapiController.getPokemontList);

module.exports = api;
