import React from 'react';

interface TerminalHeaderProps {
  title?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title = 'wistant@portfolio' }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-muted/80 to-muted border-b border-border/50">
      {/* macOS Window Buttons */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors" />
      </div>
      
      {/* Terminal Title */}
      <div className="absolute left-1/2 -translate-x-1/2 text-sm text-muted-foreground font-mono">
        {title}
      </div>
      
      {/* Empty space for balance */}
      <div className="w-[60px]" />
    </div>
  );
};

export default TerminalHeader;
