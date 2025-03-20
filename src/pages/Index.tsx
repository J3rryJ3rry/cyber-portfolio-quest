
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
      
      {/* Add global CSS styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cyber-panel-dark {
          background-color: rgba(18, 18, 18, 0.7);
          border-radius: 8px;
          border: 1px solid rgba(0, 136, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 
                      0 0 15px rgba(0, 136, 255, 0.1),
                      inset 0 0 5px rgba(0, 136, 255, 0.05);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        
        .cyber-panel-dark:hover {
          border-color: rgba(0, 136, 255, 0.4);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 
                      0 0 20px rgba(0, 136, 255, 0.2),
                      inset 0 0 8px rgba(0, 136, 255, 0.1);
        }
        
        .cyber-text {
          color: #ffffff;
          text-shadow: 0 0 5px rgba(0, 136, 255, 0.7), 0 0 10px rgba(0, 136, 255, 0.5);
        }
        
        .cyber-button {
          display: inline-block;
          background-color: rgba(18, 18, 18, 0.8);
          color: #0088FF;
          border: 1px solid rgba(0, 136, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        
        .cyber-button:hover {
          border-color: rgba(0, 136, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 136, 255, 0.3);
          text-shadow: 0 0 5px rgba(0, 136, 255, 0.5);
        }
        
        .cyber-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 136, 255, 0.1), transparent);
          transform: translateX(-100%);
        }
        
        .cyber-button:hover:before {
          transform: translateX(100%);
          transition: all 0.7s ease;
        }
      `}} />
      
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
