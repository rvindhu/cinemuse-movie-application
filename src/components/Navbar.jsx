import { NavLink, Link } from 'react-router-dom';
import { Clapperboard, Search, Bookmark, Heart, Compass, Menu, X, Sun, Moon, Settings2 } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' }, { to: '/discover', label: 'Discover', icon: Compass },
  { to: '/mood', label: 'Mood explorer' }, { to: '/watchlist', label: 'Watchlist', icon: Bookmark },
  { to: '/favorites', label: 'Favorites', icon: Heart }
];
export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Clapperboard size={21}/></span><span>CineMuse<span className="brand-dot">.</span><small>FILM DISCOVERY</small></span></Link>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
      {links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{Icon && <Icon size={16}/>} {label}</NavLink>)}
    </nav>
    <div className="nav-actions"><Link to="/discover" className="nav-search" aria-label="Search movies"><Search size={18}/></Link><button className="theme-button" onClick={toggleTheme} aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button><Link to="/settings" className="nav-search settings-shortcut" aria-label="Settings"><Settings2 size={18}/></Link><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
