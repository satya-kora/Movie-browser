import React from 'react';
import '../styles/MovieCard.css';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
    return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100px', height: 'auto' }}
            />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date.split('-')[0]}</p> 
                <button 
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(movie)} // Ensure this is used here
                >
                <span className="text">{isFavorite ? '★Remove from Favorites' : '☆Add to Favorites'}</span>
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
