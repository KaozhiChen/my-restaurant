import React from 'react';
import Header from './components/Header';
import NavIcon from './components/NavIcon';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Recipe from './components/Recipe';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <div className='bg-back'>
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
