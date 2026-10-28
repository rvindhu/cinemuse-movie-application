import MovieCard from './MovieCard';
import { Film } from 'lucide-react';

export default function MovieGrid({ movies = [], favorites = [], watchlist = [], onFavorite, onSave, loading = false, emptyTitle = 'No films found', emptyText = 'Try adjusting your search or filters.' }) {
  if (loading) return <div className="movie-grid">{Array.from({ length: 8 }, (_, i) => <div className="skeleton-card" key={i}><div className="skeleton-poster shimmer"/><div className="skeleton-line shimmer"/><div className="skeleton-line short shimmer"/></div>)}</div>;
  if (!movies.length) return <div className="empty-state"><div className="empty-icon"><Film size={24}/></div><h3>{emptyTitle}</h3><p>{emptyText}</p></div>;
  return <div className="movie-grid">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} isFavorite={favorites.some((m) => m.id === movie.id)} isSaved={watchlist.some((m) => m.id === movie.id)} onFavorite={onFavorite} onSave={onSave}/>)}</div>;
}
