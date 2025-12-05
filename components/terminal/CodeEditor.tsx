"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface CodeEditorProps {
  className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ className = '' }) => {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const codeLines = [
    "import React from 'react';",
    "",
    "const AboutWistant = () => {",
    "  const info = {",
    "    name: 'Wistant Kode',",
    "    title: 'Fullstack Developer',",
    "    experience: '5+ years',",
    "  };",
    "",
    "  const skills = {",
    "    frontend: ['React', 'Next.js', 'TypeScript'],",
    "    backend: ['NestJS', 'Node.js', 'PostgreSQL'],",
    "    tools: ['Git', 'Docker', 'VSCode'],",
    "  };",
    "",
    "  return (",
    "    <div className=\"space-y-6\">",
    "      <div className=\"text-center\">",
    "        <h1>{info.name}</h1>",
    "        <p>{info.title}</p>",
    "        <span>{info.experience}</span>",
    "      </div>",
    "",
    "      <div className=\"grid grid-cols-3\">",
    "        {Object.entries(skills).map(([key, items]) => (",
    "          <div key={key}>",
    "            <h3>{key}</h3>",
    "            {items.map(item => <div key={item}>{item}</div>)}",
    "          </div>",
    "        ))}",
    "      </div>",
    "",
    "      <p className=\"text-green-500\">",
    "        ✅ Available for projects",
    "      </p>",
    "    </div>",
    "  );",
    "};",
    "",
    "export default AboutWistant;",
  ];

  // Typing animation
  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedLines(prev => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = '';
            }
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 80);
      }
    } else if (!isCompiling && !showPreview) {
      setTimeout(() => {
        setIsCompiling(true);
        setTimeout(() => {
          setIsCompiling(false);
          setShowPreview(true);
        }, 2000);
      }, 500);
    }
  }, [currentLineIndex, currentCharIndex, codeLines, isCompiling, showPreview]);

  // Simple syntax coloring - returns JSX with colored spans
  const renderCodeLine = (line: string) => {
    const parts: JSX.Element[] = [];
    let buffer = line;
    let key = 0;

    // Keywords
    const keywords = ['import', 'from', 'const', 'return', 'export', 'default'];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      if (regex.test(buffer)) {
        buffer = buffer.replace(regex, `|KEYWORD:${kw}|`);
      }
    });

    // Strings
    buffer = buffer.replace(/'([^']*)'/g, "|STRING:'$1'|");
    buffer = buffer.replace(/"([^"]*)"/g, '|STRING:"$1"|');

    // Split and render
    const segments = buffer.split('|');
    segments.forEach((seg, i) => {
      if (seg.startsWith('KEYWORD:')) {
        const word = seg.substring(8);
        parts.push(<span key={key++} className="text-purple-400">{word}</span>);
      } else if (seg.startsWith('STRING:')) {
        const str = seg.substring(7);
        parts. className="text-green-400">{str}</span>);
      } else if (seg.trim()) {
        parts.push(<span key={key++} className="text-gray-300">{seg}</span>);
      }
    });

    return <>{parts}</>;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-[#1e1e1e]"
        >
          {/* VSCode Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#323233] border-b border-[#2d2d2d]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-400">AboutWistant.tsx</span>
              {isCompiling && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full"
                />
              )}
            </div>
            <div className="w-[60px]" />
          </div>

          {/* Code Content */}
          <div className="flex bg-[#1e1e1e] font-mono text-sm" style={{ maxHeight: '600px', minHeight: '500px', overflow: 'hidden' }}>
            {/* Line Numbers */}
            <div className="bg-[#1e1e1e] text-gray-600 pr-4 pl-4 py-4 select-none border-r border-[#2d2d2d]">
              {typedLines.map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>

            {/* Code Lines */}
            <div className="flex-1 py-4 px-4 overflow-auto">
              {typedLines.map((line, i) => (
                <div key={i} className="leading-6">
                  <span className="text-gray-300">{line}</span>
                  {i === currentLineIndex && currentCharIndex < codeLines[currentLineIndex]?.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-5 bg-white ml-0.5"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-4 py-1 bg-[#007acc] text-white text-xs flex items-center justify-between">
            <span>TypeScript React</span>
            {isCompiling && <span className="animate-pulse">⚡ Compiling...</span>}
            {showPreview && <span className="text-green-300">✓ Build successful</span>}
          </div>
        </motion.div>

        {/* Live Preview */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-primary/30 bg-gradient-to-br from-background to-muted/20"
            >
              {/* Preview Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-primary/20 to-primary/10 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Live Preview</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.3 }}
                    className="ml-2 text-xl"
                  >
                    ✨
                  </motion.span>
                </div>
              </div>

              {/* Rendered Output */}
              <div className="p-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      Wistant Kode
                    </h1>
                    <p className="text-xl text-muted-foreground mt-2">
                      Fullstack Developer
                    </p>
                    <span className="text-primary">5+ years experience</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {[
                      { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
                      { name: 'Backend', items: ['NestJS', 'Node.js', 'PostgreSQL'] },
                      { name: 'Tools', items: ['Git', 'Docker', 'VSCode'] },
                    ].map((category, i) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-4 border border-border rounded-lg bg-card"
                      >
                        <h3 className="font-bold capitalize mb-2 text-foreground">{category.name}</h3>
                        {category.items.map(item => (
                          <div key={item} className="text-sm text-muted-foreground">• {item}</div>
                        ))}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                  >
                    <p className="text-green-500 font-semibold flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✅
                      </motion.span>
                      Available for projects
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodeEditor;
