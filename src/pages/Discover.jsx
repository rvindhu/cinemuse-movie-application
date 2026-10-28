import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, RotateCcw, ArrowUpDown } from 'lucide-react';
import { discoverMovies, getGenres, searchMovies } from '../services/movieApi';
import MovieGrid from '../components/MovieGrid';
import SectionHeading from '../components/SectionHeading';

export default function Discover({ favorites, watchlist, onFavorite, onSave }) {
  const [query, setQuery] = useState(''); const [genre, setGenre] = useState(''); const [year, setYear] = useState(''); const [rating, setRating] = useState(''); const [sort, setSort] = useState('popularity.desc');
  const [genres, setGenres] = useState([]); const [movies, setMovies] = useState([]); const [page, setPage] = useState(1); const [totalPages, setTotalPages] = useState(1); const [loading, setLoading] = useState(true); const [moreLoading, setMoreLoading] = useState(false); const [error, setError] = useState('');
  useEffect(() => { const c = new AbortController(); getGenres(c.signal).then((d) => setGenres(d.genres || [])).catch(() => {}); return () => c.abort(); }, []);
  useEffect(() => {
    const controller = new AbortController(); const timer = setTimeout(() => {
      setLoading(true); setError(''); setPage(1);
      const request = query.trim() ? searchMovies(query.trim(), 1, controller.signal) : discoverMovies({ genre, year, rating, sort }, 1, controller.signal);
      request.then((data) => { setMovies(data.results || []); setTotalPages(Math.min(data.total_pages || 1, 500)); })
        .catch((e) => { if (e.name !== 'AbortError') { setError(e.message); setMovies([]); } })
        .finally(() => setLoading(false));
    }, query.trim() ? 350 : 100);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [query, genre, year, rating, sort]);
  const activeFilters = [genre, year, rating].filter(Boolean).length;
  const reset = () => { setQuery(''); setGenre(''); setYear(''); setRating(''); setSort('popularity.desc'); };
  const loadMore = async () => { if (page >= totalPages || moreLoading) return; const next = page + 1; setMoreLoading(true); try { const d = query.trim() ? await searchMovies(query.trim(), next) : await discoverMovies({ genre, year, rating, sort }, next); setMovies((old) => [...old, ...(d.results || []).filter((m) => !old.some((o) => o.id === m.id))]); setPage(next); } catch (e) { setError(e.message); } finally { setMoreLoading(false); } };
  return <div className="page-shell inner-page"><div className="page-intro"><span className="eyebrow">THE FILM LIBRARY</span><h1>Find your next <em>favorite.</em></h1><p>Follow a curiosity, explore a genre, or simply see where the story takes you.</p></div>
    <div className="discover-search"><Search size={20}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by movie title…" aria-label="Search movie titles"/><span className="search-shortcut">LIVE SEARCH</span>{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="Clear search"><X size={16}/></button>}</div>
    <div className="filter-panel"><div className="filter-heading"><span><SlidersHorizontal size={16}/> Refine your search</span>{activeFilters > 0 && <span className="filter-count">{activeFilters} active</span>}<button className="reset-button" onClick={reset}><RotateCcw size={14}/> Reset</button></div><div className="filter-controls"><label>Genre<select value={genre} onChange={(e) => setGenre(e.target.value)}><option value="">All genres</option>{genres.map((g) => <option value={g.id} key={g.id}>{g.name}</option>)}</select></label><label>Release year<select value={year} onChange={(e) => setYear(e.target.value)}><option value="">Any year</option>{Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y}>{y}</option>)}</select></label><label>Minimum rating<select value={rating} onChange={(e) => setRating(e.target.value)}><option value="">Any rating</option>{[5,6,7,8,9].map((n) => <option key={n} value={n}>{n}+ / 10</option>)}</select></label><label><span><ArrowUpDown size={13}/> Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="popularity.desc">Popularity</option><option value="vote_average.desc">Highest rated</option><option value="primary_release_date.desc">Newest first</option><option value="primary_release_date.asc">Oldest first</option></select></label></div>{query.trim() && <p className="filter-hint">Title search is active. Clear the search to apply genre, year, rating, and sorting filters.</p>}</div>
    {error && <div className="notice error-notice">{error}</div>}
    <div className="results-header"><div><span className="eyebrow">YOUR RESULTS</span><h2>{query ? `Search: “${query}”` : 'Explore the collection'}</h2></div><span className="results-caption">{loading ? 'Finding films…' : `${movies.length} shown`}</span></div>
    <MovieGrid movies={movies} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} loading={loading} emptyTitle="No films on this page" emptyText="Try a different title or broaden your filters."/>
    {!loading && movies.length > 0 && page < totalPages && <div className="load-more-wrap"><button className="button button-outline" onClick={loadMore} disabled={moreLoading}>{moreLoading ? 'Loading…' : 'Load more films'}</button></div>}
  </div>;
}
