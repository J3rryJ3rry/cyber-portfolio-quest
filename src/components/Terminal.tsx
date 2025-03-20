
import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  commands?: string[];
  typingSpeed?: number;
  className?: string;
  prompt?: string;
  autoStart?: boolean;
  loop?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
  commands = [
    'Initializing security protocols...',
    'Running vulnerability scan...',
    'Analyzing system architecture...',
    'Detecting potential exploits...',
    'Establishing secure connection...',
    'Access granted. Welcome.'
  ],
  typingSpeed = 80,
  className = '',
  prompt = '> ',
  autoStart = true,
  loop = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(autoStart);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    const command = commands[currentCommandIndex];
    
    if (charIndex < command.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(command.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, Math.random() * typingSpeed + typingSpeed / 2);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        const nextCommandIndex = (currentCommandIndex + 1) % commands.length;
        
        if (nextCommandIndex !== 0 || loop) {
          setTimeout(() => {
            setCurrentCommandIndex(nextCommandIndex);
            setCharIndex(0);
            setIsTyping(true);
          }, 1500);
        }
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentCommandIndex, isTyping, commands, typingSpeed, loop]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div 
      className={`font-mono bg-cyber-terminal p-4 rounded-md border border-cyber-blue/30 overflow-hidden ${className}`}
      ref={terminalRef}
    >
      <div className="flex">
        <span className="text-cyber-green mr-2">{prompt}</span>
        <span className="text-cyber-green">{displayedText}</span>
        {showCursor && <span className="text-cyber-green animate-terminal-cursor">▌</span>}
      </div>
    </div>
  );
};

export default Terminal;
