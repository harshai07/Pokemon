import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div style={{ minHeight: '100vh' }}>
          <ThemeToggle />
          <PokemonList />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
