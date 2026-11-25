export default function Why() {
  const features = [
    { number: '01', icon: '⌖', title: 'Local expertise', text: 'Get thoughtful advice from people who know the neighbourhoods and the details that matter.' },
    { number: '02', icon: '✳', title: 'Made around you', text: 'Your priorities lead the way. Discover options that fit your lifestyle, not just a checklist.' },
    { number: '03', icon: '✓', title: 'Clear from day one', text: 'Straightforward information and guidance help you make confident decisions.' },
    { number: '04', icon: '♡', title: 'Here when it matters', text: 'Real support from the first conversation through to the moment you get the keys.' },
  ];
  return <section className="why-section"><div className="section-wrap"><div className="section-heading"><div><span className="eyebrow">WHY DWELLO</span><h2>A better experience.<br/><em>By design.</em></h2></div><p>Good decisions start with good people, clear information, and a process that puts you first.</p></div><div className="feature-grid">{features.map((item) => <article className="feature-card" key={item.number}><div className="feature-top"><span>{item.number}</span><b>{item.icon}</b></div><h3>{item.title}</h3><p>{item.text}</p><span className="feature-line" /></article>)}</div></div></section>;
}
