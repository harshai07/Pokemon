import { useState, useMemo } from 'react';
import { usePokemonApi } from '../hooks/usePokemonApi';
import PokemonCard from '../components/PokemonCard';

const PokemonList = () => {
  const { pokemons, loading, error } = usePokemonApi();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPokemons = useMemo(() => {
    if (!searchQuery) return pokemons;
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [pokemons, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 className="title">
        Pokémon Explorer
      </h1>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      {loading && (
        <div className="loading-spinner"></div>
      )}
    </div>
  );
};

export default PokemonList;