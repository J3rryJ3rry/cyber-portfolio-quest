
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Phone, MapPin, FileText } from 'lucide-react';

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
          <div className={`lg:col-span-7 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
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
            </div>
          </div>
          
          <div className={`lg:col-span-5 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="cyber-panel-dark p-6 h-full">
              <h4 className="text-xl font-bold mb-6 text-white">Contact Information</h4>
              
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                    <Mail className="text-cyber-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:1111Jaydeeppatel0000@gmail.com" className="text-white hover:text-cyber-blue transition-colors">
                      1111Jaydeeppatel0000@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                    <Linkedin className="text-cyber-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/in/jaydeep-patel-812a42236" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-blue transition-colors">
                      jaydeep-patel-812a42236
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                    <Phone className="text-cyber-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+917285010557" className="text-white hover:text-cyber-blue transition-colors">
                      +91 72850 10557
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="text-cyber-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Vadodara, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="#" 
                  className="cyber-button flex items-center justify-center w-full py-3"
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
