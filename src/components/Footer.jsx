const Footer = () => {
  const handleResourceClick = (resource) => {
    alert(`Opening ${resource} - This feature is coming soon!`);
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Pokémon</h3>
          <p className="footer-text">
            Discover and explore the wonderful world of Pokémon with our interactive Pokedex.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><button className="footer-link" onClick={() => handleResourceClick('Pokémon Database')}>Pokémon Database</button></li>
            <li><button className="footer-link" onClick={() => handleResourceClick('Type Chart')}>Type Chart</button></li>
            <li><button className="footer-link" onClick={() => handleResourceClick('Evolution Guide')}>Evolution Guide</button></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            <span className="social-icon">🐦</span>
            <span className="social-icon">📘</span>
            <span className="social-icon">💬</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © 2026 Pokémon Explorer. Powered by PokéAPI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;