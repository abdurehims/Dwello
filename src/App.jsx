import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Houses from './components/Houses'
import Why from './components/Why'
import PropertyCard from './components/PropertyCard'
import Testimonial from './components/Testimonial'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
      <Houses />
      <Why />
      <PropertyCard />
      <Testimonial />
      <Questions />
      <EmailForm />

    </>
  )
}

export default App
