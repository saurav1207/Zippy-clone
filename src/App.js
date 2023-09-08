import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Project from './components/Project'; 
import Team from './components/Team';  
import Pricing from './components/Pricing';  
import Blog from './components/Blog';  
import Contact from './components/Contact';  
import Footer from './components/Footer';  

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
