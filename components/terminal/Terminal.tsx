"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TerminalHeader from './TerminalHeader';

export interface TerminalCommand {
  id: string;
  command: string;
  output: string | string[];
  delay?: number;
}

interface TerminalProps {
  commands: TerminalCommand[];
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ commands, className = '' }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background ${className}`}
    >
      <TerminalHeader />
      
      <div className="p-6 font-mono text-sm bg-gradient-to-br from-background to-muted/20 min-h-[400px] max-h-[600px] overflow-y-auto">
        {/* Terminal Content */}
        {commands.slice(0, currentCommandIndex + 1).map((cmd, index) => (
          <div key={cmd.id} className="mb-4">
            {/* Command Line */}
            <div className="flex items-center gap-2 text-primary">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{cmd.command}</span>
            </div>
            
            {/* Output */}
            <div className="mt-2 text-muted-foreground pl-6">
              {Array.isArray(cmd.output) ? (
                cmd.output.map((line, i) => (
                  <div key={i} className="mb-1">{line}</div>
                ))
              ) : (
                <div>{cmd.output}</div>
              )}
            </div>
          </div>
        ))}
        
        {/* Blinking Cursor */}
        {currentCommandIndex < commands.length && (
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
