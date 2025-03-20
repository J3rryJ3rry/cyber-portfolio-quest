
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Shield, Lock, Code, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const terminalCommands = [
    'Scanning system...',
    'Identifying vulnerabilities...',
    'Deploying security protocols...',
    'Initializing exploit analysis...',
    'System secured. Welcome to Jaydeep\'s portfolio.'
  ];

  return (
    <div id="hero" ref={heroRef} className="min-h-screen relative flex flex-col justify-center items-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cybersecurity-grid absolute inset-0 z-0"></div>
        
        {/* Animated circles in the background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-blue/5 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyber-green/5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div 
            className={`text-left w-full lg:w-3/5 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="inline-block bg-cyber-green/10 px-3 py-1 rounded-md border border-cyber-green/20 mb-4">
              <p className="text-sm font-mono text-cyber-green">Cybersecurity Enthusiast</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 cyber-text">
              Jaydeep Patel
            </h1>
            
            <h2 className="text-xl md:text-2xl font-mono text-gray-300 mb-6">
              <span className="text-cyber-blue">Expert in</span> Vulnerability Analysis, Exploit Development, Security Framework Design
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate cybersecurity enthusiast skilled in identifying and mitigating threats, 
              delivering actionable insights, and solving complex security challenges with precision and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="cyber-button group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Shield size={18} className="text-cyber-blue group-hover:text-white transition-colors" />
                  View My Work
                </span>
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-transparent hover:bg-cyber-blue/10 text-white font-medium py-2 px-4 border border-cyber-blue/30 hover:border-cyber-blue/60 rounded transition-all flex items-center gap-2"
              >
                <TerminalIcon size={18} className="text-cyber-blue" />
                Get In Touch
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mt-10">
              <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20">
                <Lock size={20} className="text-cyber-blue" />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20">
                <Code size={20} className="text-cyber-blue" />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20">
                <Shield size={20} className="text-cyber-blue" />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/20">
                <TerminalIcon size={20} className="text-cyber-blue" />
              </div>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-2/5 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="cyber-panel-dark p-1 rounded-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
              <div className="p-3 bg-cyber-terminal rounded-md">
                <div className="flex items-center mb-2 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono flex-1 text-center">jaydeep@secur1ty:~</div>
                </div>
                <Terminal 
                  commands={terminalCommands} 
                  typingSpeed={50} 
                  className="h-64 overflow-y-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="animate-bounce flex flex-col items-center text-gray-400 hover:text-white cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-cyber-blue" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
