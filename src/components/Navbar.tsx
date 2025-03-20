
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Shield, Menu, X, Terminal, User, Briefcase, Code, Award, Send } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Award size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Send size={16} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-darkgray/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Shield className="h-6 w-6 text-cyber-blue animate-pulse-glow" />
            <span className="font-mono font-bold text-xl tracking-tight text-white">
              <span className="text-cyber-blue">Jay</span>deep
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-300 hover:text-cyber-blue flex items-center space-x-1 group transition-all"
              >
                <span className="text-cyber-blue group-hover:text-cyber-cyan transition-colors">{item.icon}</span>
                <span className="font-medium hover:text-cyber-blue transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyber-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-cyber-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-cyber-blue flex items-center space-x-3 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyber-blue">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
