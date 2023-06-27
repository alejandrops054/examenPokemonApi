'use strict';
const axios = require('axios');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const getParameters = async (req, res) => {
  try {
    const data = req.body;
    const response = await axios.get(`${apiUrl}/${data.name}`);
    const pokemonData = response.data;
    res.status(200).send({ data: pokemonData });
    console.log(pokemonData);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error' });
  }
};


const getPokemontList = async(req, res)=>{
    try{
        const response = await axios.get(apiUrl);
        const pokemonList = response.data.results;

        console.log('Lista de Pokémon:');
        res.status(200).send({ data: pokemonList });
    }catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error' });
    }
}

module.exports = {
    getParameters,
    getPokemontList
};

