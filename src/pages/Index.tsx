
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleNetwork from '../components/ParticleNetwork';
import CyberBackground from '../components/CyberBackground';

const Index = () => {
  useEffect(() => {
    document.title = "Jaydeep Patel | Cybersecurity Portfolio";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <ParticleNetwork />
      <CyberBackground />
      
      <Navbar />
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
