"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, MapPin, Calendar, Briefcase, Coffee, Code2, Terminal } from 'lucide-react';
import Image from 'next/image';
import GridBackground from "@/components/ui/GridBackground";

interface TextModeProps {
  className?: string;
}

const TextMode: React.FC<TextModeProps> = ({ className = '' }) => {
  const stats = [
    { icon: Briefcase, label: 'Experience', value: '5+ Years' },
    { icon: Code2, label: 'Projects', value: '50+' },
    { icon: Coffee, label: 'Coffee', value: 'Infinite' },
    { icon: Terminal, label: 'Commits', value: '10k+' },
  ];

  const skills = [
    'React 19', 'Next.js 15', 'TypeScript', 'NestJS', 
    'PostgreSQL', 'Docker', 'Tailwind', 'Rust'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full max-w-5xl mx-auto ${className}`}
    >
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
        {/* Internal Grid Background */}
        <GridBackground variant="subtle" className="opacity-30" />
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            
            {/* Left Column: Photo & Quick Stats */}
            <div className="space-y-6">
              {/* Photo Frame */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-green-500 to-emerald-400 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative aspect-square rounded-[1.8rem] overflow-hidden border-2 border-white/10 bg-black/50">
                  <Image
                    src="/images/profile.jpg"
                    alt="Wistant Kode"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur border border-green-500/30 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-green-400">Available</span>
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded-xl border border-white/5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Yaoundé, Cameroon</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>wistantkode@protonmail.com</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  Wistant <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Kode</span>
                </h2>
                <p className="text-xl text-gray-400 font-light flex items-center gap-3">
                  <span className="h-px w-12 bg-primary/50"></span>
                  Fullstack Developer & AI Enthusiast
                </p>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
              >
                <p>
                  I craft <span className="text-primary font-medium">high-performance digital experiences</span> that blend aesthetic precision with robust engineering. 
                  With over 5 years of coding, I specialize in building scalable applications that solve real-world problems.
                </p>
                <p className="mt-4">
                  My stack is centered around the <span className="text-white font-medium">React ecosystem</span> and <span className="text-white font-medium">modern backend architectures</span>, 
                  always pushing the boundaries of what&apos;s possible on the web.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold overflow-hidden transition-transform active:scale-95"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <Mail className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Let&apos;s Talk</span>
                </a>
                <a
                  href="/cv/cv - wistant.pdf"
                  download="Wistant-Kode-CV.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-medium hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TextMode;
