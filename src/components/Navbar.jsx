import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const links = [ ['Home', '#home'], ['Services', '#services'], ['Properties', '#residences'], ['Agents', '#agents'], ['Contact', '#contact'] ];

export default function Navbar({ favoritesCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Dwello home"><img src={logo} alt="Dwello" /></a>
        <div className="desktop-links">
          {links.map(([label, href]) => <a key={label} className={href === activeHref ? 'nav-link active' : 'nav-link'} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="saved-link" href="#residences" aria-label={`${favoritesCount} saved properties`} title="Saved properties">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>
            {favoritesCount > 0 && <span className="saved-count">{favoritesCount}</span>}
          </a>
          <div className="account-wrap">
            <button className="icon-button account-button" onClick={() => setAccountOpen(!accountOpen)} aria-label="Open account menu" aria-expanded={accountOpen}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M4.8 20c.7-3.5 3.1-5.3 7.2-5.3s6.5 1.8 7.2 5.3"/></svg>
            </button>
            {accountOpen && <div className="account-menu"><strong>Welcome to Dwello</strong><p>Find a place that feels like home.</p><a href="#contact" onClick={() => setAccountOpen(false)}>Talk to an agent</a></div>}
          </div>
          <a className="nav-cta" href="#contact">Get in touch <span>↗</span></a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? '×' : '☰'}</button>
        </div>
      </nav>
      {menuOpen && <div className="mobile-menu">{links.map(([label, href]) => <a key={label} className={href === activeHref ? 'active' : ''} href={href} onClick={() => setMenuOpen(false)}>{label}<span>↗</span></a>)}<a className="mobile-menu-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch</a></div>}
    </header>
  );
}
