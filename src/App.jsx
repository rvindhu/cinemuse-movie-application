import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { ArrowUp, Clapperboard } from 'lucide-react';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Home from './pages/Home';
import Discover from './pages/Discover';
import MovieDetails from './pages/MovieDetails';
import MoodExplorer from './pages/MoodExplorer';
import Settings from './pages/Settings';
import { FavoritesPage, RecentlyViewedPage, WatchlistPage } from './pages/Collection';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [watchlist,setWatchlist] = useLocalStorage('watchlist',[]);
  const [favorites,setFavorites] = useLocalStorage('favorites',[]);
  const [recent,setRecent] = useLocalStorage('recent',[]);
  const [reviews,setReviews] = useLocalStorage('reviews',{});
  const [theme,setTheme] = useLocalStorage('theme','dark');
  const [preferences,setPreferences] = useLocalStorage('preferences',{minRating:'6',releasePeriod:'any'});
  const [toast,setToast] = useState(''); const location=useLocation();
  useEffect(()=>{document.documentElement.dataset.theme=theme;},[theme]);
  useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[location.pathname]);
  const notice=(message)=>{setToast(message);window.clearTimeout(window.__cinemuseToast);window.__cinemuseToast=window.setTimeout(()=>setToast(''),3500);};
  const normalizeMovie=(movie)=>({id:movie.id,title:movie.title||movie.name||'Untitled movie',poster_path:movie.poster_path||null,backdrop_path:movie.backdrop_path||null,release_date:movie.release_date||'',vote_average:movie.vote_average||0,overview:movie.overview||''});
  const onSave=(movie)=>{const normalized=normalizeMovie(movie);const exists=watchlist.some(m=>m.id===normalized.id);setWatchlist(old=>exists?old.filter(m=>m.id!==normalized.id):[{...normalized,status:'want',priority:'normal',note:'',addedAt:new Date().toISOString()},...old]);notice(exists?'Removed from your watchlist.':'Added to your watchlist.');};
  const onFavorite=(movie)=>{const normalized=normalizeMovie(movie);const exists=favorites.some(m=>m.id===normalized.id);setFavorites(old=>exists?old.filter(m=>m.id!==normalized.id):[normalized,...old]);notice(exists?'Removed from favorites.':'Added to favorites.');};
  const onViewed=(movie)=>{const normalized=normalizeMovie(movie);setRecent(old=>[{...normalized,viewedAt:new Date().toISOString()},...old.filter(m=>m.id!==normalized.id)].slice(0,20));};
  const onReview=(id,review)=>setReviews(old=>({...old,[id]:review}));
  const toggleTheme=()=>setTheme(old=>old==='dark'?'light':'dark');
  const clearData=()=>{if(window.confirm('Clear all CineMuse saved movies, favorites, history, reviews, and preferences from this browser? This cannot be undone unless you exported a backup.')){setWatchlist([]);setFavorites([]);setRecent([]);setReviews({});setPreferences({minRating:'6',releasePeriod:'any'});notice('CineMuse personal data cleared.');}};
  return <div className="app-root"><Navbar theme={theme} toggleTheme={toggleTheme}/><main><Routes>
    <Route path="/" element={<Home favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave}/>}/>
    <Route path="/discover" element={<Discover favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave}/>}/>
    <Route path="/movie/:id" element={<MovieDetails favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave} onViewed={onViewed} onReview={onReview} reviews={reviews} onNotice={notice}/>}/>
    <Route path="/watchlist" element={<WatchlistPage watchlist={watchlist} setWatchlist={setWatchlist} favorites={favorites} onFavorite={onFavorite} onSave={onSave} onNotice={notice}/>}/>
    <Route path="/favorites" element={<FavoritesPage favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave}/>}/>
    <Route path="/mood" element={<MoodExplorer favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave}/>}/>
    <Route path="/recent" element={<RecentlyViewedPage recent={recent} favorites={favorites} watchlist={watchlist} onFavorite={onFavorite} onSave={onSave}/>}/>
    <Route path="/settings" element={<Settings theme={theme} toggleTheme={toggleTheme} preferences={preferences} setPreferences={setPreferences} onClearData={clearData} onNotice={notice}/>}/>
    <Route path="*" element={<div className="page-shell inner-page not-found"><span className="eyebrow">WRONG TURN IN THE STORY</span><h1>That page is off-screen.</h1><p>Let's get you back to the good stuff.</p><Link to="/" className="button button-primary">Return home</Link></div>}/>
  </Routes></main><footer className="site-footer"><div className="footer-main"><Link to="/" className="brand footer-brand"><span className="brand-mark"><Clapperboard size={20}/></span><span>CineMuse<span className="brand-dot">.</span><small>DISCOVER YOUR NEXT FAVORITE FILM</small></span></Link><p>A quiet corner of the internet for your next great story.</p><div className="footer-links"><Link to="/discover">Discover</Link><Link to="/watchlist">Watchlist</Link><Link to="/recent">Recently viewed</Link><Link to="/settings">Settings</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CineMuse · Built with curiosity.</span><span>Movie data provided by TMDB. Not endorsed or certified by TMDB.</span><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="back-top" aria-label="Back to top"><ArrowUp size={16}/></button></div></footer><Toast message={toast} onClose={()=>setToast('')}/></div>;
}
