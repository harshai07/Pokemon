import { useState, useMemo } from 'react';
import { usePokemonApi } from '../hooks/usePokemonApi';
import PokemonCard from './PokemonCard';
import PokemonDetailModal from './PokemonDetailModal';

const PokemonList = () => {
  const { pokemons, loading, error } = usePokemonApi();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const filteredPokemons = useMemo(() => {
    if (!searchQuery) return pokemons;
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [pokemons, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (pokemonDetails) => {
    setSelectedPokemon(pokemonDetails);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
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
          <PokemonCard key={pokemon.name} pokemon={pokemon} onClick={handleCardClick} />
        ))}
      </div>

      {loading && (
        <div className="loading-spinner"></div>
      )}
      <PokemonDetailModal pokemon={selectedPokemon} onClose={handleCloseModal} />
    </div>
  );
};

export default PokemonList;