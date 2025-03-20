
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Lock, Database, Cpu, Server, ShieldAlert, Binary, Scan } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Zero Day Exploit Analysis Framework",
      description: "A comprehensive framework for identifying, analyzing, and documenting zero-day vulnerabilities in various systems. This tool helps security professionals understand potential attack vectors and develop appropriate mitigation strategies.",
      tech: ["Python", "C++", "Assembly", "Reverse Engineering", "Exploit Development"],
      image: "/lovable-uploads/f97ca33c-e0d3-44f3-8a11-c91e86a01a0a.png",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-500/30 to-purple-500/30",
      link: "#",
      binary: "01001000 01100001 01100011 01101011"
    },
    {
      title: "Smart Parking Management System",
      description: "An IoT-based parking management system with integrated car rental functionality. The system includes secure authentication, real-time monitoring, and automated threat detection to prevent unauthorized access.",
      tech: ["Java", "Spring Boot", "React", "MongoDB", "IoT", "RESTful APIs"],
      image: "/placeholder.svg",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500/30 to-cyan-500/30",
      link: "#",
      binary: "01010011 01100101 01100011 01110101 01110010 01100101"
    },
    {
      title: "Network Traffic Analysis Tool",
      description: "A specialized tool for analyzing network traffic patterns to identify potential security threats and anomalies. Features machine learning algorithms to detect unusual behavior that may indicate a breach attempt.",
      tech: ["Python", "TensorFlow", "Network Protocols", "Data Visualization"],
      image: "/placeholder.svg",
      icon: <Server className="w-6 h-6" />,
      color: "from-red-500/30 to-orange-500/30",
      link: "#",
      binary: "01000110 01101001 01110010 01100101 01110111 01100001 01101100 01101100"
    },
    {
      title: "Secure Firmware Update System",
      description: "A framework for securely distributing and applying firmware updates to IoT devices, ensuring integrity and authenticity of updates while preventing man-in-the-middle attacks and unauthorized modifications.",
      tech: ["C", "Embedded Systems", "Cryptography", "Secure Boot"],
      image: "/placeholder.svg",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-yellow-500/30 to-amber-500/30",
      link: "#",
      binary: "01000011 01110010 01111001 01110000 01110100 01101111"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">My Projects</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text glitch-text" data-text="Featured Projects">Featured Projects</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="cyber-panel-dark overflow-hidden group relative h-full border-0 bg-transparent">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity group-hover:opacity-40`}></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyber-blue/20 to-cyber-cyan/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyber-purple/20 to-cyber-blue/20 rounded-tr-full"></div>
                
                {/* Binary code background */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
                  <div className="text-[8px] text-cyber-blue font-mono leading-tight p-4">
                    {Array(20).fill(0).map((_, i) => (
                      <div key={i} className="overflow-hidden whitespace-nowrap">
                        {project.binary.repeat(8)}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Animated scanner line - only visible on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="w-full h-1 bg-cyber-blue/30 animate-[scan_2s_linear_infinite] absolute top-0 left-0 transform translate-y-0"></div>
                  </div>
                )}
                
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/30 group-hover:border-cyber-blue/70 transition-all duration-300 group-hover:scale-110">
                      <div className="relative">
                        {project.icon}
                        <div className="absolute inset-0 bg-cyber-blue/30 rounded-full blur-md opacity-0 group-hover:opacity-70 animate-pulse"></div>
                      </div>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-cyber-darkgray border border-cyber-blue/30 hover:bg-cyber-blue/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-cyber-blue" />
                    </a>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors flex items-center">
                    <span className="mr-2">{project.title}</span>
                    {hoveredProject === index && (
                      <ShieldAlert className="w-4 h-4 text-cyber-blue animate-pulse" />
                    )}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:bg-cyber-blue/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-block cyber-button mt-auto group-hover:bg-cyber-blue/30 transition-colors"
                  >
                    <span className="flex items-center">
                      <Scan className="mr-2 w-4 h-4" />
                      Access Project
                    </span>
                  </a>
                </CardContent>
                
                {/* Animated corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-blue/50 group-hover:border-cyber-blue transition-colors"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-blue/50 group-hover:border-cyber-blue transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-blue/50 group-hover:border-cyber-blue transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-blue/50 group-hover:border-cyber-blue transition-colors"></div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 flex justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.6s' }}>
          <button 
            className="cyber-button-alt py-3 px-8 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <Binary className="mr-2 w-5 h-5" />
              <span>Explore All Projects</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-cyan/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            
            {/* Moving dots pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity">
              <div className="moving-dots"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Add CSS for scanning animation to global styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(100vh); }
          50.001% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        
        .glitch-text {
          position: relative;
          animation: glitch 5s infinite;
        }
        
        .glitch-text:after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -1px 0 #0088FF;
          top: 0;
          color: white;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-anim 3s infinite linear alternate-reverse;
        }
        
        .glitch-text:before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow: 1px 0 #00FFFF;
          top: 0;
          color: white;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-anim-2 6s infinite linear alternate-reverse;
        }
        
        @keyframes noise-anim {
          0% { clip: rect(1px, 9999px, 39px, 0); }
          5% { clip: rect(85px, 9999px, 69px, 0); }
          10% { clip: rect(32px, 9999px, 54px, 0); }
          15% { clip: rect(27px, 9999px, 59px, 0); }
          20% { clip: rect(13px, 9999px, 45px, 0); }
          25% { clip: rect(24px, 9999px, 70px, 0); }
          30% { clip: rect(88px, 9999px, 71px, 0); }
          35% { clip: rect(75px, 9999px, 86px, 0); }
          40% { clip: rect(12px, 9999px, 15px, 0); }
          45% { clip: rect(91px, 9999px, 11px, 0); }
          50% { clip: rect(84px, 9999px, 34px, 0); }
          55% { clip: rect(99px, 9999px, 17px, 0); }
          60% { clip: rect(47px, 9999px, 61px, 0); }
          65% { clip: rect(53px, 9999px, 95px, 0); }
          70% { clip: rect(57px, 9999px, 12px, 0); }
          75% { clip: rect(64px, 9999px, 94px, 0); }
          80% { clip: rect(15px, 9999px, 76px, 0); }
          85% { clip: rect(23px, 9999px, 34px, 0); }
          90% { clip: rect(18px, 9999px, 41px, 0); }
          95% { clip: rect(62px, 9999px, 61px, 0); }
          100% { clip: rect(43px, 9999px, 59px, 0); }
        }
        
        @keyframes noise-anim-2 {
          0% { clip: rect(26px, 9999px, 29px, 0); }
          5% { clip: rect(44px, 9999px, 44px, 0); }
          10% { clip: rect(16px, 9999px, 10px, 0); }
          15% { clip: rect(85px, 9999px, 48px, 0); }
          20% { clip: rect(63px, 9999px, 71px, 0); }
          25% { clip: rect(91px, 9999px, 16px, 0); }
          30% { clip: rect(25px, 9999px, 67px, 0); }
          35% { clip: rect(23px, 9999px, 22px, 0); }
          40% { clip: rect(19px, 9999px, 70px, 0); }
          45% { clip: rect(30px, 9999px, 51px, 0); }
          50% { clip: rect(98px, 9999px, 68px, 0); }
          55% { clip: rect(11px, 9999px, 62px, 0); }
          60% { clip: rect(25px, 9999px, 81px, 0); }
          65% { clip: rect(22px, 9999px, 99px, 0); }
          70% { clip: rect(41px, 9999px, 81px, 0); }
          75% { clip: rect(9px, 9999px, 18px, 0); }
          80% { clip: rect(96px, 9999px, 42px, 0); }
          85% { clip: rect(72px, 9999px, 43px, 0); }
          90% { clip: rect(25px, 9999px, 2px, 0); }
          95% { clip: rect(58px, 9999px, 97px, 0); }
          100% { clip: rect(39px, 9999px, 88px, 0); }
        }
        
        .cyber-button-alt {
          background-color: rgba(10, 10, 10, 0.8);
          color: #0088FF;
          border: 1px solid rgba(0, 136, 255, 0.3);
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 136, 255, 0.1);
        }
        
        .cyber-button-alt:hover {
          border-color: rgba(0, 136, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 136, 255, 0.3);
          text-shadow: 0 0 5px rgba(0, 136, 255, 0.5);
        }
        
        .moving-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background-image: radial-gradient(circle, #0088FF 1px, transparent 1px);
          background-size: 16px 16px;
          animation: moveDots 20s linear infinite;
        }
        
        @keyframes moveDots {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50%, -50%); }
        }
      `}} />
    </section>
  );
};

export default Projects;
