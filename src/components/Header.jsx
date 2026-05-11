import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <div className="logo-icon">
            ⚡
          </div>
          <h1 className="header-title">Pokémon Explorer</h1>
        </div>
        <div className="header-right">
          <nav className="nav">
            <span className="nav-item">Discover</span>
            <span className="nav-item">Pokedex</span>
            <span className="nav-item">Teams</span>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;