
import React from 'react';
import { Link } from 'react-scroll';
import { Shield, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue/10 py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Shield className="h-6 w-6 text-cyber-blue" />
              <span className="font-mono font-bold text-xl tracking-tight text-white">
                <span className="text-cyber-blue">Jay</span>deep
              </span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Cybersecurity specialist focused on vulnerability analysis, 
              exploit development, and security framework design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20 hover:bg-cyber-blue/10 transition-colors"
              >
                <Github className="text-cyber-blue w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jaydeep-patel-812a42236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20 hover:bg-cyber-blue/10 transition-colors"
              >
                <Linkedin className="text-cyber-blue w-5 h-5" />
              </a>
              <a 
                href="mailto:1111Jaydeeppatel0000@gmail.com" 
                className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20 hover:bg-cyber-blue/10 transition-colors"
              >
                <Mail className="text-cyber-blue w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20 hover:bg-cyber-blue/10 transition-colors"
              >
                <ExternalLink className="text-cyber-blue w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">Phone: +91 72850 10557</p>
              <p className="text-gray-500 text-sm">Email: 1111Jaydeeppatel0000@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jaydeep Kirankumar Patel. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
