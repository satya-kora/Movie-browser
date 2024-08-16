import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

function MovieList({ movies, favoriteMovies, onToggleFavorite }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteMovies.some(favMovie => favMovie.id === movie.id)}
          onToggleFavorite={onToggleFavorite} // Ensure this is passed here
        />
      ))}
    </div>
  );
}

export default MovieList;
