import house from '../assets/images/heroImage.png';
import SearchBox from './SearchBox';

export default function Hero({ filters, setFilters, query, setQuery }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><i /> A better way to find home</span>
          <h1>Find a place<br />you’ll <em>love</em> to live.</h1>
          <p>Thoughtfully selected homes, trusted local experts, and a smoother journey from the first search to the front door.</p>
          <div className="hero-actions"><a className="button button-dark" href="#residences">Explore properties <span>↗</span></a><a className="text-link" href="#services">How it works <span>→</span></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><b>+</b></div><div><strong>Trusted by home seekers</strong><small>Personal guidance, every step.</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src={house} alt="Contemporary home surrounded by greenery" /></div>
          <div className="floating-note"><span className="note-icon">⌂</span><div><strong>Find your place</strong><small>Make your next move count</small></div><span className="note-arrow">↗</span></div>
          <div className="hero-stamp"><span>DWELLO</span><strong>HOME<br/>STARTS<br/>HERE.</strong></div>
        </div>
      </div>
      <SearchBox filters={filters} setFilters={setFilters} query={query} setQuery={setQuery} />
    </section>
  );
}
