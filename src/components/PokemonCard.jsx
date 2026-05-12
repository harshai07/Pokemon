import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon, onClick }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cardLoaded, setCardLoaded] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

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
        // Trigger entrance animation after loading
        setTimeout(() => setCardLoaded(true), 100);
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

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleClick = () => {
    if (onClick) onClick(details);
  };

  return (
    <div
      className={`pokemon-card ${cardLoaded ? 'card-entered' : ''} ${isPressed ? 'pressed' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
    >
      <img
        src={details.sprites.front_default}
        alt={details.name}
        onLoad={() => setImageLoaded(true)}
        className={imageLoaded ? 'loaded' : ''}
      />
      <h3>
        {details.name}
      </h3>
      <div className="type-tags">
        {details.types.map((type) => (
          <span
            key={type.type.name}
            className={`type-tag type-${type.type.name}`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;