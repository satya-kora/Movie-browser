import React from 'react';
import '../styles/FavouriteMovies.css';

function FavoriteMovies({ favoriteMovies }) {
  return (
    <div className="favorite-movies">
      <h2>My Favorite Movies</h2>
      {favoriteMovies.length > 0 ? (
        <ul>
          {favoriteMovies.map(movie => (
            <li key={movie.id}>
              <img 
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`} 
                alt={movie.title} 
              />
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
}

export default FavoriteMovies;
