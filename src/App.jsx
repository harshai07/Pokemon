import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app">
          <Header />
          <main className="main-content">
            <PokemonList />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
