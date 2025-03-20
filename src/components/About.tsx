
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Shield, Code, Server } from 'lucide-react';
import { Button } from './ui/button';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="about" ref={ref} className="py-24 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyber-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyber-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">Who Am I</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text">About Me</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className={`lg:col-span-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="cyber-panel-dark p-6 h-full relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-60"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-60"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-cyan to-transparent opacity-60"></div>
              
              <div className="corner-decoration top-0 left-0 w-8 h-8 absolute">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue"></div>
                <div className="absolute top-0 left-0 h-full w-1 bg-cyber-blue"></div>
              </div>
              
              <div className="corner-decoration top-0 right-0 w-8 h-8 absolute">
                <div className="absolute top-0 right-0 w-full h-1 bg-cyber-cyan"></div>
                <div className="absolute top-0 right-0 h-full w-1 bg-cyber-cyan"></div>
              </div>
              
              <div className="corner-decoration bottom-0 left-0 w-8 h-8 absolute">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-cyber-blue"></div>
                <div className="absolute bottom-0 left-0 h-full w-1 bg-cyber-blue"></div>
              </div>
              
              <div className="corner-decoration bottom-0 right-0 w-8 h-8 absolute">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-cyan"></div>
                <div className="absolute bottom-0 right-0 h-full w-1 bg-cyber-cyan"></div>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                <Shield className="mr-2 text-cyber-blue" size={20} />
                Cybersecurity Specialist
              </h4>
              
              <p className="text-gray-300 mb-6 pl-2 border-l-2 border-cyber-blue/30">
                I'm a passionate cybersecurity enthusiast with expertise in vulnerability analysis, exploit development, and security framework design. My goal is to make digital environments safer by identifying and mitigating threats before they become problems.
              </p>
              
              <p className="text-gray-300 mb-6 pl-2 border-l-2 border-cyber-green/30">
                With a strong foundation in both offensive and defensive security practices, I excel at finding creative solutions to complex security challenges. I believe in continuous learning and staying ahead of emerging threats to provide the best protection possible.
              </p>
              
              <p className="text-gray-300 mb-6 pl-2 border-l-2 border-cyber-cyan/30">
                My approach combines technical excellence with clear communication, ensuring that security insights are accessible to technical and non-technical stakeholders alike.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="col-span-2 sm:col-span-1 bg-cyber-darkgray p-5 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,136,255,0.3)]">
                  <h5 className="text-cyber-blue font-medium mb-3 flex items-center">
                    <Server className="mr-2" size={18} />
                    Education
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-cyber-black/40 p-3 rounded">
                      <p className="text-white mb-1 font-semibold">B.Tech. - CSE</p>
                      <p className="text-gray-400 mb-1">Parul University, Vadodara, India</p>
                      <p className="text-gray-400 mb-1">2021 - 2025</p>
                      <p className="text-cyber-green flex items-center">
                        <span className="bg-cyber-green/20 px-2 py-1 rounded text-sm">CGPA: 7.33 / 10</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2 sm:col-span-1 bg-cyber-darkgray p-5 rounded-lg border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <h5 className="text-cyber-cyan font-medium mb-3 flex items-center">
                    <Code className="mr-2" size={18} />
                    Expertise
                  </h5>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-start group">
                      <div className="h-6 flex items-center">
                        <span className="text-cyber-cyan mr-2 group-hover:animate-pulse">&gt;</span>
                      </div>
                      <span className="group-hover:text-white transition-colors">Vulnerability Assessment</span>
                    </li>
                    <li className="text-gray-300 flex items-start group">
                      <div className="h-6 flex items-center">
                        <span className="text-cyber-cyan mr-2 group-hover:animate-pulse">&gt;</span>
                      </div>
                      <span className="group-hover:text-white transition-colors">Exploit Development</span>
                    </li>
                    <li className="text-gray-300 flex items-start group">
                      <div className="h-6 flex items-center">
                        <span className="text-cyber-cyan mr-2 group-hover:animate-pulse">&gt;</span>
                      </div>
                      <span className="group-hover:text-white transition-colors">Security Framework Design</span>
                    </li>
                    <li className="text-gray-300 flex items-start group">
                      <div className="h-6 flex items-center">
                        <span className="text-cyber-cyan mr-2 group-hover:animate-pulse">&gt;</span>
                      </div>
                      <span className="group-hover:text-white transition-colors">Penetration Testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 flex justify-center">
                <a 
                  href="/lovable-uploads/bedee6d2-cc44-44a0-95be-614fcb4ffab8.png" 
                  download="JaydeepPatel_Resume.png"
                  className="group relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-blue bg-[length:200%_100%] rounded-lg transition-opacity duration-500 blur-xl opacity-30 group-hover:opacity-70 ${isHovering ? 'animate-[gradient-x_3s_ease_infinite]' : ''}`}></div>
                  
                  <div className={`relative z-10 flex items-center justify-center py-3 px-8 rounded-lg bg-cyber-darkgray border overflow-hidden ${isHovering ? 'border-cyber-blue/70' : 'border-cyber-blue/30'} transition-all duration-300 group-hover:-translate-y-1`}>
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      <div className={`w-full h-full absolute ${isHovering ? 'animate-matrix-scan' : ''}`}>
                        {isHovering && (
                          <div className="h-[2px] w-full absolute top-1/2 left-0 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
                        )}
                      </div>
                    </div>
                    
                    <FileText size={20} className={`mr-3 ${isHovering ? 'text-cyber-blue animate-pulse' : 'text-cyber-blue/80'}`} />
                    <span className={`font-mono tracking-wider ${isHovering ? 'text-white' : 'text-cyber-blue/90'} transition-colors`}>DOWNLOAD RESUME</span>
                    <Download size={18} className={`ml-3 ${isHovering ? 'text-cyber-blue animate-bounce' : 'text-cyber-blue/80'}`} />
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes matrix-scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}} />
    </section>
  );
};

export default About;
