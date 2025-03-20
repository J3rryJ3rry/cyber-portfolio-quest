
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Lock, Database, Cpu, Server } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Zero Day Exploit Analysis Framework",
      description: "A comprehensive framework for identifying, analyzing, and documenting zero-day vulnerabilities in various systems. This tool helps security professionals understand potential attack vectors and develop appropriate mitigation strategies.",
      tech: ["Python", "C++", "Assembly", "Reverse Engineering", "Exploit Development"],
      image: "/lovable-uploads/f97ca33c-e0d3-44f3-8a11-c91e86a01a0a.png",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-500/20 to-purple-500/20",
      link: "#"
    },
    {
      title: "Smart Parking Management System",
      description: "An IoT-based parking management system with integrated car rental functionality. The system includes secure authentication, real-time monitoring, and automated threat detection to prevent unauthorized access.",
      tech: ["Java", "Spring Boot", "React", "MongoDB", "IoT", "RESTful APIs"],
      image: "/placeholder.svg",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500/20 to-cyan-500/20",
      link: "#"
    },
    {
      title: "Network Traffic Analysis Tool",
      description: "A specialized tool for analyzing network traffic patterns to identify potential security threats and anomalies. Features machine learning algorithms to detect unusual behavior that may indicate a breach attempt.",
      tech: ["Python", "TensorFlow", "Network Protocols", "Data Visualization"],
      image: "/placeholder.svg",
      icon: <Server className="w-6 h-6" />,
      color: "from-red-500/20 to-orange-500/20",
      link: "#"
    },
    {
      title: "Secure Firmware Update System",
      description: "A framework for securely distributing and applying firmware updates to IoT devices, ensuring integrity and authenticity of updates while preventing man-in-the-middle attacks and unauthorized modifications.",
      tech: ["C", "Embedded Systems", "Cryptography", "Secure Boot"],
      image: "/placeholder.svg",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-yellow-500/20 to-amber-500/20",
      link: "#"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">My Projects</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text">Featured Projects</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="cyber-panel-dark overflow-hidden group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity group-hover:opacity-30`}></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyber-blue/10 to-cyber-cyan/10 rounded-bl-full"></div>
                
                <div className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-darkgray flex items-center justify-center border border-cyber-blue/30">
                      {project.icon}
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
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">{project.title}</h4>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-block cyber-button mt-auto"
                  >
                    <span className="flex items-center">
                      <Github className="mr-2 w-4 h-4" />
                      View Project
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 flex justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.6s' }}>
          <a 
            href="#" 
            className="cyber-button py-3 px-8"
          >
            <span className="flex items-center">
              <Github className="mr-2 w-5 h-5" />
              View All Projects
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
