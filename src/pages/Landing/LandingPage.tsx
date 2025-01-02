import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Chefs from './components/Chefs';


function App() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <HeroSection />
      <Categories />
      <Chefs />
      <Footer />
    </div>
  );
}

export default App;
