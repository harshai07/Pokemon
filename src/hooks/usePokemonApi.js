import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const POKEMON_API_BASE = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemonApi = (initialLimit = 100) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${POKEMON_API_BASE}?limit=${initialLimit}`);
      setPokemons(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [initialLimit]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return {
    pokemons,
    loading,
    error,
  };
};