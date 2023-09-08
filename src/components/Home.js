import React from 'react';
import Navbar from './Navbar';
import About from './About';  
import Project from './Project'; 
import Pricing from './Pricing'; 
import Team from './Team'; 
import Blog from './Blog'; 
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
      <Team />
      <Pricing />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
