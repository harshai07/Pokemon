import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(pokemon.url);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [pokemon.url]);

  if (loading) {
    return (
      <div className="pokemon-card skeleton">
        <div style={{ height: '8rem', marginBottom: '0.5rem' }}></div>
        <div style={{ height: '1rem', marginBottom: '0.25rem' }}></div>
        <div style={{ height: '1rem', width: '75%' }}></div>
      </div>
    );
  }

  if (!details) return null;

  return (
    <div className="pokemon-card">
      <img
        src={details.sprites.front_default}
        alt={details.name}
      />
      <h3>
        {details.name}
      </h3>
      <div className="type-tags">
        {details.types.map((type) => (
          <span
            key={type.type.name}
            className="type-tag"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;