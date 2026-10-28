import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Play, Bookmark, Clapperboard, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTrending, getPopular, getNowPlaying, posterUrl } from '../services/movieApi';
import MovieGrid from '../components/MovieGrid';
import SectionHeading from '../components/SectionHeading';

export default function Home({ favorites, watchlist, onFavorite, onSave }) {
  const [trending, setTrending] = useState([]); const [popular, setPopular] = useState([]); const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true); const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController(); setLoading(true); setError('');
    Promise.all([getTrending(controller.signal), getPopular(controller.signal), getNowPlaying(controller.signal)])
      .then(([t, p, n]) => { setTrending(t.results || []); setPopular(p.results || []); setNowPlaying(n.results || []); })
      .catch((e) => { if (e.name !== 'AbortError') setError(e.message); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  const hero = trending[0] || popular[0];
  return <div className="page-shell home-page">
    <section className="hero-section">
      <div className="hero-copy"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> YOUR PERSONAL FILM JOURNAL</div><h1>Stories that stay<br/><em>with you.</em></h1><p className="hero-description">A little inspiration for your next movie night. Discover stories, save the ones that call to you, and find your kind of cinema.</p><div className="hero-buttons"><Link to="/discover" className="button button-primary">Explore films <ArrowRight size={17}/></Link><Link to="/mood" className="button button-quiet">Find by mood <Sparkles size={16}/></Link></div><div className="hero-note"><span className="note-stars">✳ ✳ ✳</span><span>Curated for your next chapter</span></div></div>
      <div className="hero-art">{hero?.backdrop_path ? <img src={posterUrl(hero.backdrop_path, 'w1280')} alt="Featured movie scene"/> : <div className="hero-art-placeholder"><Clapperboard size={62}/></div>}<div className="hero-art-shade"/><div className="hero-film-label"><span className="live-dot"/> THE CINEMUSE EDIT</div>{hero && <div className="featured-card"><span className="eyebrow">FEATURED DISCOVERY</span><h3>{hero.title}</h3><p>{hero.overview || 'A story waiting to be discovered.'}</p><Link to={`/movie/${hero.id}`} className="text-link">Meet the film <ArrowRight size={15}/></Link></div>}<div className="hero-index">01 <span/> 04</div></div>
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
    </section>
    {error && <div className="notice error-notice"><strong>Movie data could not load.</strong> {error}<p>Add your TMDB token to <code>.env</code> and restart the app. You can still explore the layout.</p></div>}
    <section className="content-section"><SectionHeading eyebrow="THE CURRENT CONVERSATION" title="Trending this week" description="Films people are talking about right now." action={<Link className="text-link" to="/discover">Discover more <ArrowRight size={15}/></Link>}/><MovieGrid movies={trending.slice(0, 6)} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} loading={loading} emptyTitle="Your next favorite is waiting" emptyText="Connect the movie API to discover trending films."/></section>
    <section className="quote-band"><Quote size={24}/><p>“Cinema is a mirror by which we often see ourselves.”</p><span>YOUR NEXT GREAT STORY IS OUT THERE</span></section>
    <section className="content-section"><SectionHeading eyebrow="A GOOD PLACE TO BEGIN" title="Popular picks" description="A hand-picked starting point from the movie world's most-watched titles." action={<Link className="text-link" to="/discover">View all <ArrowRight size={15}/></Link>}/><MovieGrid movies={popular.slice(0, 6)} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} loading={loading}/></section>
    <section className="content-section compact-section"><SectionHeading eyebrow="ON THE BIG SCREEN" title="Now playing" description="Recent releases to add to your radar."/><MovieGrid movies={nowPlaying.slice(0, 4)} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} loading={loading}/></section>
    <section className="closing-cta"><div><span className="eyebrow">A LITTLE LESS SCROLLING, A LITTLE MORE STORY</span><h2>Your next movie night<br/><em>starts here.</em></h2></div><Link className="button button-primary" to="/mood">Let CineMuse decide <Sparkles size={17}/></Link></section>
  </div>;
}
