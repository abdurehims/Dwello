import { useState } from 'react';
import houseA from '../assets/images/Group11A.png';
import houseB from '../assets/images/Group11B.png';
import houseC from '../assets/images/Group11C.png';

const properties = [
  { id: 1, image: houseA, location: 'San Francisco, California', name: 'The Laurel Residence', type: 'House', rooms: 4, size: '3,500', price: 2500000, priceLabel: '$2,500,000', tag: 'FEATURED' },
  { id: 2, image: houseB, location: 'Beverly Hills, California', name: 'The Willow House', type: 'Villa', rooms: 3, size: '1,500', price: 850000, priceLabel: '$850,000', tag: 'NEW LISTING' },
  { id: 3, image: houseC, location: 'Palo Alto, California', name: 'The Modern Estate', type: 'House', rooms: 6, size: '4,000', price: 3700000, priceLabel: '$3,700,000', tag: 'EXCLUSIVE' },
];

export default function PropertyCard({ filters, setFilters, query, setQuery, favorites = [], toggleFavorite = () => {} }) {
  const [activeProperty, setActiveProperty] = useState(null);
  const filtered = properties.filter((item) => {
    const matchesLocation = filters.location === 'Any location' || item.location.includes(filters.location);
    const matchesType = filters.type === 'Any property' || item.type === filters.type;
    const matchesBudget = filters.budget === 'Any budget' || (filters.budget === 'Under $1M' && item.price < 1000000) || (filters.budget === '$1M – $3M' && item.price >= 1000000 && item.price <= 3000000) || (filters.budget === 'Above $3M' && item.price > 3000000);
    const searchText = `${item.name} ${item.location} ${item.type}`.toLowerCase();
    return matchesLocation && matchesType && matchesBudget && searchText.includes(query.toLowerCase());
  });
  return (
    <section id="residences" className="properties-section"><div className="section-wrap"><div className="section-heading properties-heading"><div><span className="eyebrow">A FEW PLACES TO INSPIRE YOU</span><h2>Homes worth<br/><em>coming home to.</em></h2></div><p>Explore a selection of distinctive homes chosen for the way they make everyday living feel.</p></div>
      <div className="property-toolbar"><span>{filtered.length} thoughtfully selected {filtered.length === 1 ? 'home' : 'homes'}</span><a href="#home">Adjust search ↑</a></div>
      {filtered.length ? <div className="property-grid">{filtered.map((item) => <article className="property-card" key={item.id}><div className="property-image"><img src={item.image} alt={item.name}/><span className="property-tag">{item.tag}</span><button className={favorites.includes(item.id) ? 'favorite-button is-favorite' : 'favorite-button'} onClick={() => toggleFavorite(item.id)} aria-label={favorites.includes(item.id) ? 'Remove from saved homes' : 'Save home'}>{favorites.includes(item.id) ? '♥' : '♡'}</button></div><div className="property-info"><span className="property-location">⌖ {item.location}</span><h3>{item.name}</h3><div className="property-meta"><span>⌂ {item.rooms} bedrooms</span><span>▱ {item.size} sq ft</span></div><div className="property-bottom"><strong>{item.priceLabel}</strong><button onClick={() => setActiveProperty(item)} className="details-button">View details <span>↗</span></button></div></div></article>)}</div> : <div className="empty-state"><span>⌕</span><h3>No homes match those filters</h3><p>Try another location, property type, or price range.</p><button className="button button-dark" onClick={() => { setFilters({ location: 'Any location', type: 'Any property', budget: 'Any budget' }); setQuery(''); }}>Clear search</button></div>}
      <div className="all-properties"><a className="button button-outline" href="#contact">Find your perfect home <span>↗</span></a></div>
      {activeProperty && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProperty(null)}><div className="property-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProperty(null)} aria-label="Close details">×</button><img src={activeProperty.image} alt={activeProperty.name}/><div className="modal-content"><span className="eyebrow">{activeProperty.location}</span><h2 id="modal-title">{activeProperty.name}</h2><strong>{activeProperty.priceLabel}</strong><p>{activeProperty.rooms} bedrooms · {activeProperty.size} sq ft · {activeProperty.type}</p><a href="#contact" className="button button-dark" onClick={() => setActiveProperty(null)}>Ask about this home ↗</a></div></div></div>}
    </div></section>
  );
}
