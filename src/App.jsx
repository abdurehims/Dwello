import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Houses from './components/Houses';
import Why from './components/Why';
import PropertyCard from './components/PropertyCard';
import Testimonial from './components/Testimonial';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  const [filters, setFilters] = useState({ location: 'Any location', type: 'Any property', budget: 'Any budget' });
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <>
      <Navbar favoritesCount={favorites.length} />
      <main>
        <Hero filters={filters} setFilters={setFilters} query={query} setQuery={setQuery} />
        <Houses />
        <Why />
        <PropertyCard filters={filters} setFilters={setFilters} query={query} setQuery={setQuery} favorites={favorites} toggleFavorite={toggleFavorite} />
        <Testimonial />
        <Questions />
      </main>
      <Footer />
    </>
  );
}

export default App;
