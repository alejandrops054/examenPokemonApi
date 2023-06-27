'use strict';
const express = require('express');
const pokeapiController = require('../controllers/pokeapiController');
const api = express.Router();

api.get('/getParametros', pokeapiController.getParameters);
api.get('/getPokemontList', pokeapiController.getPokemontList);
api.get('/getPokemontSearch', pokeapiController.getPokemonSearch);

module.exports = api;
