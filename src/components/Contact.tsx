
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import Terminal from './Terminal';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 mb-4">
            <h2 className="text-sm font-mono text-cyber-blue">Get In Touch</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center cyber-text">Contact Me</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="cyber-panel-dark p-6">
              <h4 className="text-xl font-bold mb-6 text-white">Send Me a Message</h4>
              
              {isSubmitted ? (
                <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-md p-4 text-center">
                  <p className="text-white mb-2">Your message has been sent successfully!</p>
                  <p className="text-gray-300">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cyber-darkgray/70 text-white border border-cyber-blue/20 rounded-md px-4 py-2 focus:outline-none focus:border-cyber-blue/60"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-cyber-darkgray/70 text-white border border-cyber-blue/20 rounded-md px-4 py-2 focus:outline-none focus:border-cyber-blue/60"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-cyber-darkgray/70 text-white border border-cyber-blue/20 rounded-md px-4 py-2 focus:outline-none focus:border-cyber-blue/60"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-cyber-darkgray/70 text-white border border-cyber-blue/20 rounded-md px-4 py-2 h-32 focus:outline-none focus:border-cyber-blue/60"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="cyber-button w-full py-3 flex items-center justify-center relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="cyber-panel-dark p-6 mb-8">
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
                    <MapPin className="text-cyber-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Vadodara, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-panel-dark p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Terminal Access</h4>
              <Terminal 
                commands={[
                  'ssh user@jaydeep-server',
                  'Establishing secure connection...',
                  'Connection established.',
                  'Encrypted channel open.',
                  'Welcome to Jaydeep\'s secure terminal!',
                  'Type "help" for available commands.',
                  '> help',
                  'Available commands: contact, projects, skills, about'
                ]} 
                typingSpeed={50} 
                className="h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
