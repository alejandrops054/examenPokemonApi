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
        const alfabética = pokemonList.sort((a, b)=>{
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })

        console.log('Lista de Pokémon:');
        res.status(200).send({ data: alfabética });
    }catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error' });
    }
}

const getPokemonSearch = async (req, res) => {
    try {
      const { name, page, limit } = req.query;
      const offset = (page - 1) * limit;
      let url = `${apiUrl}?offset=${offset}&limit=${limit}`;
  
      if (name) {
        url += `&name=${name}`;
      }
  
      const response = await axios.get(url);
      const pokemonList = response.data.results.map((pokemon) => pokemon.name);
      const totalCount = response.data.count;
  
      res.status(200).send({
        data: pokemonList,
        totalCount: totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: parseInt(page),
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error' });
    }
  };

module.exports = {
    getParameters,
    getPokemontList,
    getPokemonSearch
};

