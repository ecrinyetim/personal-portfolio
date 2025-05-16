// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import { Element } from "react-scroll";

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
           <Contact />
      </>
  );
}

export default App;
