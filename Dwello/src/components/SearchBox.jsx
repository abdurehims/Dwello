export default function SearchBox({ filters, setFilters, query, setQuery }) {
  const update = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  return (
    <form className="search-panel" onSubmit={(event) => { event.preventDefault(); document.getElementById('residences')?.scrollIntoView({ behavior: 'smooth' }); }}>
      <div className="search-heading"><span>Find your next home</span><small>Use the filters to narrow your search</small></div>
      <label className="search-field"><span className="field-icon">⌖</span><span className="field-content"><small>Location</small><select value={filters.location} onChange={(e) => update('location', e.target.value)}><option>Any location</option><option>San Francisco</option><option>Beverly Hills</option><option>Palo Alto</option></select></span></label>
      <label className="search-field"><span className="field-icon">⌂</span><span className="field-content"><small>Property type</small><select value={filters.type} onChange={(e) => update('type', e.target.value)}><option>Any property</option><option>House</option><option>Villa</option><option>Apartment</option></select></span></label>
      <label className="search-field"><span className="field-icon">＄</span><span className="field-content"><small>Price range</small><select value={filters.budget} onChange={(e) => update('budget', e.target.value)}><option>Any budget</option><option>Under $1M</option><option>$1M – $3M</option><option>Above $3M</option></select></span></label>
      <label className="search-keyword"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Keyword or neighbourhood" aria-label="Search by keyword" /></label>
      <button className="search-submit" type="submit"><span>Search homes</span><b>↗</b></button>
    </form>
  );
}
