"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

interface TextModeProps {
  className?: string;
}

const TextMode: React.FC<TextModeProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`max-w-4xl mx-auto ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Wistant Kode"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          {/* Name & Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Wistant Kode
            </h2>
            <p className="text-xl text-muted-foreground">Fullstack Developer</p>
          </div>

          {/* Bio */}
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Passionate developer with <span className="text-primary font-semibold">5+ years</span> of experience 
              building scalable web applications.
            </p>
            <p>
              I specialize in creating elegant solutions that transform complex problems into intuitive digital experiences, 
              with a focus on performance, security, and user satisfaction.
            </p>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Yaoundé, Cameroon</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>5+ Years Experience</span>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-light rounded-lg font-medium hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TextMode;
