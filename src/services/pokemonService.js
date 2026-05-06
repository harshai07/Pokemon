import axios from 'axios';

const POKEMON_API_BASE = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${POKEMON_API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const fetchPokemonDetails = async (idOrName) => {
  const response = await axios.get(`${POKEMON_API_BASE}/pokemon/${idOrName}`);
  return response.data;
};