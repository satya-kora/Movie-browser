import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import FavoriteMovies from './components/FavouriteMovies';
import Header from './components/Header';
import { fetchMovies } from './services/api';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    if (query) {
      fetchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleToggleFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (prevFavorites.some(favMovie => favMovie.id === movie.id)) {
        return prevFavorites.filter(favMovie => favMovie.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  movies={movies} 
                  favoriteMovies={favoriteMovies}
                  onToggleFavorite={handleToggleFavorite}
                  onSearch={setQuery} 
                />
              } 
            />
            <Route 
              path="/favorites" 
              element={<FavoriteMovies favoriteMovies={favoriteMovies} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home({ movies, favoriteMovies, onToggleFavorite, onSearch }) {
  const location = useLocation();

  return (
    <div className="main-content">
      {location.pathname === '/' && (
        <div className="search-bar-container">
          <SearchBar onSearch={onSearch} />
        </div>
      )}
      <MovieList 
        movies={movies} 
        favoriteMovies={favoriteMovies}
        onToggleFavorite={onToggleFavorite} 
      />
    </div>
  );
}

export default App;
