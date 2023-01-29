import React from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
    
  );
}

export default App;
