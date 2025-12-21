import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CursorSpotlight from './components/CursorSpotlight';

import { ThemeProvider } from './context/ThemeContext';
import ParticlesBackground from './components/ParticlesBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-background min-h-screen relative overflow-hidden text-slate-200 transition-colors duration-500">
          <ParticlesBackground />
          <CursorSpotlight />

          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
