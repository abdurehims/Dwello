import house from '../assets/images/luxury_and_rich_home_exterior_side_view.png';

export default function Houses() {
  return (
    <section id="services" className="story-section section-wrap">
      <div className="story-image"><img src={house} alt="Beautiful modern residence" /><div className="image-caption"><span>01 / OUR APPROACH</span><strong>More than a house.<br/>A place to belong.</strong></div></div>
      <div className="story-copy"><span className="eyebrow">THE DWELLO DIFFERENCE</span><h2>Your next chapter<br/>starts <em>at home.</em></h2><p>Finding a home is personal. We bring together thoughtful property selections and knowledgeable people to make every decision feel clearer, easier, and more human.</p><a className="text-link" href="#residences">Discover our approach <span>→</span></a>
        <div className="stats-grid"><div><strong>8K<span>+</span></strong><small>Homes explored</small></div><div><strong>6K<span>+</span></strong><small>Happy moves</small></div><div><strong>2K<span>+</span></strong><small>Trusted agents</small></div></div>
      </div>
    </section>
  );
}
