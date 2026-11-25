import { useState } from 'react';
import testimoniOne from '../assets/images/TestimoniOne.png';
import testimoniTwo from '../assets/images/TestimoniTwo.png';
import testimoniThree from '../assets/images/TestimoniThree.png';
import sarah from '../assets/images/sarah.png';
import michael from '../assets/images/michael.png';
import emily from '../assets/images/emily.png';

const testimonials = [
  { image: testimoniOne, profile: sarah, name: 'Sarah Nguyen', location: 'San Francisco', quote: 'Dwello made the whole process feel personal. The team understood what mattered to us and helped us find a home that felt right from the first visit.' },
  { image: testimoniTwo, profile: michael, name: 'Michael Rodriguez', location: 'San Diego', quote: 'The advice was clear, the communication was thoughtful, and every step felt manageable. I could not have asked for a better home-search experience.' },
  { image: testimoniThree, profile: emily, name: 'Emily Johnson', location: 'Los Angeles', quote: 'From our first conversation to getting the keys, I felt supported. Dwello helped turn a big life decision into an exciting one.' },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  const move = (direction) => setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  return <section id="agents" className="testimonial-section"><div className="section-wrap testimonial-layout"><div className="testimonial-intro"><span className="eyebrow">REAL STORIES, REAL HOMES</span><h2>Good moves.<br/><em>Great stories.</em></h2><p>Every home marks a new beginning. We’re proud to be part of these stories.</p><div className="testimonial-controls"><button onClick={() => move(-1)} aria-label="Previous testimonial">←</button><button onClick={() => move(1)} aria-label="Next testimonial">→</button><span>0{active + 1} <i>/</i> 0{testimonials.length}</span></div></div><article className="testimonial-card" key={item.name}><div className="testimonial-photo"><img src={item.image} alt="Home shared by a Dwello client"/><span>CLIENT NOTES</span></div><div className="testimonial-quote"><div className="quote-mark">“</div><p>{item.quote}</p><div className="client-row"><img src={item.profile} alt={item.name}/><div><strong>{item.name}</strong><small>{item.location}</small></div><span className="rating">★★★★★</span></div></div></article></div></section>;
}
