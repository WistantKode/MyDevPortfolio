"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, FileText } from 'lucide-react';

interface ModeToggleProps {
  mode: 'terminal' | 'text';
  onToggle: (mode: 'terminal' | 'text') => void;
  className?: string;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1 p-1 bg-muted/50 rounded-lg border border-border/50 ${className}`}>
      <button
        onClick={() => onToggle('terminal')}
        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          mode === 'terminal'
            ? 'text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {mode === 'terminal' && (
          <motion.div
            layoutId="activeMode"
            className="absolute inset-0 bg-gradient-primary rounded-md"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" />
          Terminal
        </span>
      </button>
      
      <button
        onClick={() => onToggle('text')}
        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          mode === 'text'
            ? 'text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {mode === 'text' && (
          <motion.div
            layoutId="activeMode"
            className="absolute inset-0 bg-gradient-primary rounded-md"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Text
        </span>
      </button>
    </div>
  );
};

export default ModeToggle;
