import { Bookmark, Heart, Star, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posterUrl } from '../services/movieApi';

export default function MovieCard({ movie, isFavorite, isSaved, onFavorite, onSave }) {
  const year = movie.release_date?.slice(0, 4) || 'Year unknown';
  return <article className="movie-card">
    <div className="poster-wrap">
      <Link to={`/movie/${movie.id}`} aria-label={`View details for ${movie.title || movie.name}`}>
        {movie.poster_path ? <img className="poster" src={posterUrl(movie.poster_path)} alt={`${movie.title} poster`} loading="lazy" /> : <div className="poster-fallback"><span>CM</span><small>Poster unavailable</small></div>}
      </Link>
      <div className="poster-actions">
        <button className={`icon-button ${isFavorite ? 'is-active' : ''}`} onClick={() => onFavorite(movie)} aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'} title="Favorite"><Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} /></button>
        <button className={`icon-button ${isSaved ? 'is-active' : ''}`} onClick={() => onSave(movie)} aria-label={isSaved ? 'Remove from watchlist' : 'Add to watchlist'} title="Watchlist"><Bookmark size={17} fill={isSaved ? 'currentColor' : 'none'} /></button>
      </div>
      <span className="rating-pill"><Star size={13} fill="currentColor" /> {Number(movie.vote_average || 0).toFixed(1)}</span>
    </div>
    <div className="movie-card-info">
      <Link className="movie-title" to={`/movie/${movie.id}`}>{movie.title || movie.name || 'Untitled movie'}</Link>
      <div className="movie-meta"><span><CalendarDays size={13}/>{year}</span><span>Movie</span></div>
    </div>
  </article>;
}
