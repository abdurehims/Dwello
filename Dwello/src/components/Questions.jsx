import { useState } from 'react';

const faqs = [
  { q: 'How does Dwello help me find a home?', a: 'Start with the search filters to explore available homes. When something catches your eye, contact our team and we can help you understand the next steps.' },
  { q: 'Can I speak with a real estate agent?', a: 'Absolutely. Send us a message using the contact form and our team can help connect you with the right local expert.' },
  { q: 'Can I save properties I like?', a: 'Yes. Use the heart icon on any property card to save it during your visit. The saved count appears in the navigation.' },
];

export default function Questions() {
  const [open, setOpen] = useState(0);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const submitNewsletter = (event) => { event.preventDefault(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('Please enter a valid email address.'); return; } setStatus('Thanks! Demo signup complete. Connect an email service to store subscribers.'); setEmail(''); };
  const submitContact = (event) => { event.preventDefault(); if (!message.trim()) { setContactStatus('Please tell us a little about what you need.'); return; } setContactStatus('Thanks! This demo captured your message locally. Connect an email or backend service to deliver it to your team.'); setMessage(''); };
  return <section id="contact" className="contact-section"><div className="section-wrap"><div className="contact-top"><div><span className="eyebrow">LET’S MAKE A MOVE</span><h2>Questions? We’re<br/><em>here to help.</em></h2><p>Tell us what you’re looking for. A good conversation is a great place to start.</p></div><div className="contact-card"><span className="contact-card-icon">✳</span><h3>Talk to a real person.</h3><p>Whether you’re buying, browsing, or simply curious, we’d love to hear from you.</p><a href="mailto:hello@dwello.example">hello@dwello.example ↗</a></div></div>
      <div className="contact-bottom"><div className="faq-column"><span className="eyebrow">A LITTLE CLARITY</span><h3>Frequently asked<br/>questions</h3>{faqs.map((faq, index) => <div className={open === index ? 'faq-item faq-open' : 'faq-item'} key={faq.q}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{faq.q}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{faq.a}</p>}</div>)}</div>
      <div className="message-column"><span className="eyebrow">SEND A NOTE</span><h3>How can we<br/>help you?</h3><form onSubmit={submitContact} className="message-form"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="I’m looking for a home in..." rows="4"/><button className="button button-dark" type="submit">Send message <span>↗</span></button>{contactStatus && <p className="form-status" role="status">{contactStatus}</p>}</form></div></div>
      <div className="newsletter"><div><span className="eyebrow">THE DWELLO LETTER</span><h3>Good things start at home.</h3><p>Occasional property inspiration and helpful advice. No noise.</p></div><form onSubmit={submitNewsletter}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"/><button type="submit">Subscribe <span>↗</span></button>{status && <small role="status">{status}</small>}</form></div>
    </div></section>;
}
