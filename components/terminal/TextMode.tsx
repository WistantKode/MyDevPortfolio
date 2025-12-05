"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Zap, Download, Mail, Terminal as TerminalIcon } from 'lucide-react';

interface TextModeProps {
  className?: string;
}

const TextMode: React.FC<TextModeProps> = ({ className = '' }) => {
  const skills = [
    { icon: Code2, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { icon: Database, name: 'Backend', items: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma'] },
    { icon: Zap, name: 'Tools', items: ['Git', 'Docker', 'VSCode', 'Linux'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`space-y-8 ${className}`}
    >
      {/* Intro */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Passionate fullstack developer with <span className="text-primary font-semibold">5+ years</span> of experience building scalable web applications. 
          I specialize in creating elegant solutions that transform complex problems into intuitive digital experiences.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border-light shadow-card hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all group"
        >
          <Mail className="w-4 h-4" />
          Get In Touch
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border-light rounded-lg font-medium hover:border-primary hover:bg-primary/10 transition-all group"
        >
          <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default TextMode;
