import React from 'react';

const PokemonDetailModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
        <div className="modal-body">
          <div className="detail-section">
            <div className="detail-item">
              <span className="detail-label">Height:</span>
              <span className="detail-value">{pokemon.height / 10} m</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Weight:</span>
              <span className="detail-value">{pokemon.weight / 10} kg</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Types:</span>
              <div className="detail-value">
                {pokemon.types.map((type, index) => (
                  <span key={type.type.name} className={`type-tag type-${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-label">Abilities:</span>
              <span className="detail-value">{pokemon.abilities.map(a => a.ability.name).join(', ')}</span>
            </div>
          </div>

          <div className="stats-section">
            <h3>Base Stats</h3>
            <div className="stats-grid">
              {pokemon.stats.map((stat, index) => (
                <div key={stat.stat.url || index} className="stat-item">
                  <span className="stat-name">{stat.stat.name.replace('-', ' ')}</span>
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                    ></div>
                  </div>
                  <span className="stat-value">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;