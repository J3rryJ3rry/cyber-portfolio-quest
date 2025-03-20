
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, Code, Database, Server, Network, Search,
  Terminal, Award, FileText, Brain
} from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    {
      category: "Security Analysis",
      icon: <Shield className="text-cyber-blue w-5 h-5" />,
      skills: [
        { name: "Vulnerability Assessment", level: 95 },
        { name: "Penetration Testing", level: 90 },
        { name: "Exploit Development", level: 85 },
        { name: "Security Auditing", level: 80 },
      ]
    },
    {
      category: "Programming",
      icon: <Code className="text-cyber-blue w-5 h-5" />,
      skills: [
        { name: "Python", level: 94 },
        { name: "C++", level: 92 },
        { name: "Java", level: 80 },
        { name: "Assembly", level: 75 },
      ]
    },
    {
      category: "Infrastructure",
      icon: <Server className="text-cyber-blue w-5 h-5" />,
      skills: [
        { name: "Network Security", level: 85 },
        { name: "Cloud Security", level: 80 },
        { name: "System Administration", level: 75 },
        { name: "Docker & Kubernetes", level: 70 },
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Terminal className="text-cyber-blue w-5 h-5" />,
      skills: [
        { name: "Metasploit", level: 90 },
        { name: "Wireshark", level: 85 },
        { name: "Burp Suite", level: 80 },
        { name: "Nmap", level: 90 },
      ]
    }
  ];

  const certifications = [
    {
      name: "Advent of Cyber 2023,2024",
      issuer: "TryHackMe",
      date: "2024",
      logo: <Shield className="w-10 h-10 text-cyber-cyan" />,
    },
    {
      name: "CPA: Programming Essentials in C++",
      issuer: "Cisco Networking Academy",
      date: "2023",
      logo: <Code className="w-10 h-10 text-cyber-cyan" />,
    },
    {
      name: "Python",
      issuer: "Score: 94/100",
      date: "2023",
      logo: <Terminal className="w-10 h-10 text-cyber-cyan" />,
    }
  ];

  const accomplishments = [
    {
      title: "TryHackMe Top-1 percent",
      icon: <Award className="w-10 h-10 text-cyber-green" />,
      description: "Ranked in the top 1% of all TryHackMe users worldwide, demonstrating exceptional skills in various cybersecurity challenges and exercises."
    },
    {
      title: "ProHacker on HackTheBox",
      icon: <Shield className="w-10 h-10 text-cyber-green" />,
      description: "Achieved the prestigious ProHacker status on HackTheBox by completing numerous challenging machines and demonstrating advanced penetration testing skills."
    },
    {
      title: "CTF Player",
      icon: <Terminal className="w-10 h-10 text-cyber-green" />,
      description: "Active participant in Capture The Flag competitions, regularly solving complex cybersecurity challenges in areas like cryptography, reverse engineering, and web exploitation."
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">My Skills</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text">Skills & Achievements</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'technical' 
                ? 'bg-cyber-blue text-white' 
                : 'bg-cyber-blue/10 text-gray-300 hover:bg-cyber-blue/20'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Skills
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'certifications' 
                ? 'bg-cyber-blue text-white' 
                : 'bg-cyber-blue/10 text-gray-300 hover:bg-cyber-blue/20'
              }`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'accomplishments' 
                ? 'bg-cyber-blue text-white' 
                : 'bg-cyber-blue/10 text-gray-300 hover:bg-cyber-blue/20'
              }`}
              onClick={() => setActiveTab('accomplishments')}
            >
              Accomplishments
            </button>
          </div>
          
          {/* Technical Skills */}
          <div className={`transition-all duration-500 ${activeTab === 'technical' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((skillGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`cyber-panel-dark p-6 transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${groupIndex * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-3">
                      {skillGroup.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{skillGroup.category}</h4>
                  </div>
                  
                  <div className="space-y-6">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-200">{skill.name}</span>
                          <span className="text-cyber-blue">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-cyber-darkgray rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-full transform transition-all duration-1000 ${
                              inView ? 'translate-x-0' : '-translate-x-full'
                            }`}
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${(groupIndex * 0.2) + (skillIndex * 0.1) + 0.5}s` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className={`transition-all duration-500 ${activeTab === 'certifications' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`cyber-panel-dark p-6 text-center transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/30">
                      {cert.logo}
                    </div>
                  </div>
                  <h5 className="text-xl font-semibold text-white mb-2">{cert.name}</h5>
                  <p className="text-cyber-blue mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Accomplishments */}
          <div className={`transition-all duration-500 ${activeTab === 'accomplishments' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accomplishments.map((item, index) => (
                <div
                  key={index}
                  className={`cyber-panel-dark p-6 h-full transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h5 className="text-xl font-semibold text-white mb-4">{item.title}</h5>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
