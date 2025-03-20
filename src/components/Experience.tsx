
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "CyberSecurity Intern",
      company: "Bhaskaracharya National Institute for Space Applications and Geo-informatics",
      period: "Dec 2024 - April 2025",
      description: "Working on vulnerability analysis and exploit development for space application systems.",
      skills: ["Problem-Solving", "Debugging Tools", "Exploit Development", "Reverse Engineering", "Programming", "Vulnerability Research", "Networking"],
      icon: <Briefcase className="w-5 h-5" />,
    }
  ];

  const projects = [
    {
      title: "Zero Day Exploit Analysis Framework",
      period: "Dec 2024 - April 2025",
      description: "Focused on crafting and simulating exploits to assess vulnerabilities and improve detection mechanisms.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Smart Parking Management System and Car Rental Synergy",
      period: "Jul 2024 - Oct 2024",
      description: "Developed a secure system for managing parking spots and car rentals with robust security features.",
      skills: ["Programming", "Database Management", "API Development", "Networking", "UI/UX Design", "Cybersecurity"],
      icon: <Calendar className="w-5 h-5" />,
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">My Experience</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text">Professional Journey</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="cyber-panel-dark p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                  <Briefcase className="text-cyber-blue w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Work Experience</h4>
              </div>
              
              <div className="relative pl-8 border-l border-cyber-blue/30">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="mb-8 relative"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyber-blue/20 border border-cyber-blue/40 flex items-center justify-center">
                      {exp.icon}
                    </div>
                    <div className="cyber-panel p-4">
                      <h5 className="text-lg font-semibold text-white mb-1">{exp.title}</h5>
                      <p className="text-cyber-blue font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                      </p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Projects */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="cyber-panel-dark p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
                  <Award className="text-cyber-blue w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Projects</h4>
              </div>
              
              <div className="relative pl-8 border-l border-cyber-blue/30">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="mb-8 relative"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyber-blue/20 border border-cyber-blue/40 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div className="cyber-panel p-4">
                      <h5 className="text-lg font-semibold text-white mb-1">{project.title}</h5>
                      <p className="text-gray-400 text-sm mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> {project.period}
                      </p>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      {project.skills && (
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Roles */}
        <div className={`mt-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.4s' }}>
          <div className="cyber-panel-dark p-6">
            <h4 className="text-xl font-bold mb-6 text-white">Positions of Responsibility</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white mb-2">Core Team Member, THE HACKER'S MEET-UP VADODARA CHAPTER</h5>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyber-cyan mr-2">›</span>
                  Organizing and managing meet-ups, workshops, and hackathons
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyber-cyan mr-2">›</span>
                  Curating topics and arranging technical sessions
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyber-cyan mr-2">›</span>
                  Engaging with the community to foster collaboration
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyber-cyan mr-2">›</span>
                  Mentoring new members and facilitating a collaborative learning environment
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">Seminars / Trainings / Workshops</h5>
              <div className="cyber-panel p-4">
                <h6 className="font-semibold text-white mb-1">Cybersecurity Training (TechDefence, May-Jun 2024)</h6>
                <p className="text-gray-300 mb-2">Participated in comprehensive training covering various aspects of cybersecurity.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    Network Security
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    VAPT
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    Mobile Security
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    SOC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
