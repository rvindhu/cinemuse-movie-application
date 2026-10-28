import { useEffect, useMemo, useState } from 'react';
import { Sparkles, Shuffle, SlidersHorizontal, Heart, Coffee, Sun, CloudRain, Zap, Compass, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { discoverMovies, getGenres } from '../services/movieApi';
import MovieGrid from '../components/MovieGrid';
import SectionHeading from '../components/SectionHeading';

const moods = [
  { id: 'relaxed', label: 'Relaxed', hint: 'Gentle, easy-going stories', icon: Coffee, genres: [35,10749,99] },
  { id: 'happy', label: 'Happy', hint: 'Warm, uplifting energy', icon: Sun, genres: [35,16,10751] },
  { id: 'emotional', label: 'Emotional', hint: 'Stories that stay with you', icon: CloudRain, genres: [18,10749] },
  { id: 'suspenseful', label: 'Suspenseful', hint: 'Keep me guessing', icon: Zap, genres: [53,9648,80] },
  { id: 'adventurous', label: 'Adventurous', hint: 'Somewhere extraordinary', icon: Compass, genres: [12,14,878] },
  { id: 'thoughtful', label: 'Thoughtful', hint: 'Something to think about', icon: Brain, genres: [18,99,878] }
];
export default function MoodExplorer({ favorites, watchlist, onFavorite, onSave }) {
  const [mood, setMood] = useState('happy'); const [genre, setGenre] = useState(''); const [year, setYear] = useState(''); const [rating, setRating] = useState('6'); const [genres, setGenres] = useState([]); const [movies, setMovies] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(''); const [decide, setDecide] = useState(false);
  useEffect(() => { const c = new AbortController(); getGenres(c.signal).then(d => setGenres(d.genres || [])).catch(() => {}); return () => c.abort(); }, []);
  useEffect(() => { const c = new AbortController(); setLoading(true); setError(''); const selected = moods.find(m => m.id === mood); const selectedGenre = genre || selected.genres.join('|');
    discoverMovies({ genre: selectedGenre, year, rating, sort: 'popularity.desc' }, 1, c.signal).then(d => setMovies(d.results || [])).catch(e => { if(e.name !== 'AbortError') setError(e.message); }).finally(() => setLoading(false)); return () => c.abort();
  }, [mood, genre, year, rating]);
  const pick = () => { if (!movies.length) return; setDecide(true); };
  const shortlist = useMemo(() => movies.filter(m => !watchlist.some(w => w.id === m.id && w.status === 'watched')).slice(0, 3), [movies, watchlist]);
  return <div className="page-shell inner-page mood-page"><div className="page-intro"><span className="eyebrow">A FEELING, A FILM</span><h1>What are you in the <em>mood for?</em></h1><p>Start with how you want the evening to feel. CineMuse will find films that loosely fit your selection.</p></div>
    <div className="mood-panel"><div className="mood-panel-heading"><div><span className="eyebrow">FIRST, THE FEELING</span><h2>Choose your mood</h2></div><span className="approx-label"><Sparkles size={14}/> Approximate matches</span></div><div className="mood-options">{moods.map(({id,label,hint,icon:Icon}) => <button key={id} onClick={() => {setMood(id);setDecide(false);}} className={`mood-option ${mood===id?'selected':''}`} aria-pressed={mood===id}><span className="mood-icon"><Icon size={20}/></span><span className="mood-label">{label}</span><span className="mood-hint">{hint}</span></button>)}</div>
      <div className="mood-filters"><div className="filter-heading"><span><SlidersHorizontal size={16}/> Fine-tune your evening</span></div><div className="filter-controls"><label>Preferred genre<select value={genre} onChange={e=>setGenre(e.target.value)}><option value="">Use mood suggestions</option>{genres.map(g=><option key={g.id} value={g.id}>{g.name}</option>)}</select></label><label>Release year<select value={year} onChange={e=>setYear(e.target.value)}><option value="">Any year</option>{Array.from({length:50},(_,i)=>new Date().getFullYear()-i).map(y=><option key={y}>{y}</option>)}</select></label><label>Minimum rating<select value={rating} onChange={e=>setRating(e.target.value)}>{[0,5,6,7,8,9].map(v=><option key={v} value={v}>{v===0?'Any rating':`${v}+ / 10`}</option>)}</select></label></div><p className="filter-hint">Mood is your choice, not detected by the app. We use genre associations you can adjust, plus real movie ratings and release metadata.</p></div>
    </div>
    {error && <div className="notice error-notice">{error}</div>}
    <div className="mood-results-heading"><SectionHeading eyebrow={`YOUR ${mood.toUpperCase()} EDITION`} title="A few stories to consider" description="These suggestions are based on your chosen mood's associated genres, popularity, and filters." action={<button className="button button-primary" onClick={pick}><Sparkles size={16}/> Decide for me</button>}/></div>
    {decide && <div className="shortlist-panel"><div><span className="eyebrow">YOUR SHORTLIST</span><h3>Three possibilities for tonight</h3><p>Choose a film below, or add one to your watchlist for later.</p></div><div className="shortlist-links">{shortlist.length ? shortlist.map((m,i)=><Link to={`/movie/${m.id}`} key={m.id}><span>{String(i+1).padStart(2,'0')}</span>{m.title}<ArrowRight size={15}/></Link>) : <p>No unwatched matches right now. Try a different mood or rating.</p>}</div></div>}
    <MovieGrid movies={movies} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} loading={loading} emptyTitle="No films matched this mood" emptyText="Try a different mood, remove a filter, or lower the minimum rating."/>
    <div className="random-pick-note"><Shuffle size={18}/><p><strong>Want a surprise?</strong> “Decide for me” makes a shortlist from these real results. It is a simple preference-based helper, not an AI mood detector.</p></div>
  </div>;
}
