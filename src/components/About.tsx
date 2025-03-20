
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
            <div className="cyber-panel-dark p-6 h-full">
              <h4 className="text-xl font-bold mb-4 text-white">Cybersecurity Specialist</h4>
              
              <p className="text-gray-300 mb-6">
                I'm a passionate cybersecurity enthusiast with expertise in vulnerability analysis, exploit development, and security framework design. My goal is to make digital environments safer by identifying and mitigating threats before they become problems.
              </p>
              
              <p className="text-gray-300 mb-6">
                With a strong foundation in both offensive and defensive security practices, I excel at finding creative solutions to complex security challenges. I believe in continuous learning and staying ahead of emerging threats to provide the best protection possible.
              </p>
              
              <p className="text-gray-300 mb-6">
                My approach combines technical excellence with clear communication, ensuring that security insights are accessible to technical and non-technical stakeholders alike.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-cyber-blue font-medium mb-3">Education</h5>
                  <p className="text-white mb-1 font-semibold">B.Tech. - CSE</p>
                  <p className="text-gray-400 mb-1">Parul University, Vadodara, India</p>
                  <p className="text-gray-400 mb-1">2021 - 2025</p>
                  <p className="text-cyber-green">CGPA: 7.33 / 10</p>
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-cyber-blue font-medium mb-3">Expertise</h5>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-cyber-cyan mr-2">›</span>
                      Vulnerability Assessment
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-cyber-cyan mr-2">›</span>
                      Exploit Development
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-cyber-cyan mr-2">›</span>
                      Security Framework Design
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-cyber-cyan mr-2">›</span>
                      Penetration Testing
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="#" 
                  className="cyber-button flex items-center justify-center py-3 px-6"
                >
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
