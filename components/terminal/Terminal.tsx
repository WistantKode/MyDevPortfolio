"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalHeader from './TerminalHeader';
import { useTypewriter } from '@/hooks/useTerminal';

export interface TerminalCommand {
  id: string;
  command: string;
  output: string | string[];
  delay?: number;
}

interface TerminalProps {
  commands: TerminalCommand[];
  className?: string;
  autoPlay?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ 
  commands, 
  className = '',
  autoPlay = true 
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showOutput, setShowOutput] = useState<boolean[]>([]);
  const [completedCommands, setCompletedCommands] = useState<number[]>([]);

  const currentCommand = commands[currentCommandIndex];
  
  const { displayedText, isComplete } = useTypewriter({
    text: isTyping && currentCommand ? currentCommand.command : '',
    speed: 50,
    onComplete: () => {
      setIsTyping(false);
      setIsExecuting(true);
      
      // Simulate command execution
      setTimeout(() => {
        setIsExecuting(false);
        setShowOutput(prev => {
          const newShowOutput = [...prev];
          newShowOutput[currentCommandIndex] = true;
          return newShowOutput;
        });
        setCompletedCommands(prev => [...prev, currentCommandIndex]);
        
        // Move to next command
        setTimeout(() => {
          if (currentCommandIndex < commands.length - 1) {
            setCurrentCommandIndex(prev => prev + 1);
            setIsTyping(true);
          }
        }, 1500);
      }, 800);
    },
  });

  // Start typing first command
  useEffect(() => {
    if (autoPlay && currentCommandIndex === 0 && !isTyping && completedCommands.length === 0) {
      setIsTyping(true);
    }
  }, [autoPlay, currentCommandIndex, isTyping, completedCommands.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background ${className}`}
    >
      <TerminalHeader />
      
      <div className="p-6 font-mono text-sm bg-gradient-to-br from-background to-muted/20 min-h-[400px] max-h-[600px] overflow-y-auto">
        {/* Completed Commands */}
        {completedCommands.map((cmdIndex) => {
          const cmd = commands[cmdIndex];
          return (
            <motion.div
              key={cmd.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4"
            >
              {/* Command Line */}
              <div className="flex items-center gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-muted-foreground">$</span>
                <span className="text-foreground">{cmd.command}</span>
              </div>
              
              {/* Output */}
              {showOutput[cmdIndex] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-muted-foreground pl-6"
                >
                  {Array.isArray(cmd.output) ? (
                    cmd.output.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mb-1"
                      >
                        {line}
                      </motion.div>
                    ))
                  ) : (
                    <div>{cmd.output}</div>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
        
        {/* Current Typing Command */}
        {isTyping && currentCommand && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary"
              />
            </div>
          </div>
        )}

        {/* Executing Command with Loading */}
        {isExecuting && currentCommand && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{currentCommand.command}</span>
            </div>
            <div className="mt-2 pl-6 flex items-center gap-2 text-primary">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
              />
              <span className="text-sm">Executing...</span>
            </div>
          </div>
        )}
        
        {/* Empty Prompt for Next Command */}
        {!isTyping && !isExecuting && currentCommandIndex >= commands.length && (
          <div className="flex items-center gap-2">
            <span className="text-green-500">➜</span>
            <span className="text-blue-400">~</span>
            <span className="text-muted-foreground">$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-primary ml-1"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
