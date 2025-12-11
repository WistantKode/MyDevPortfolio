"use client";

import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ArrowRight, Github, Heart, Linkedin, Mail, MapPin} from 'lucide-react';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Social links
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/wistantkode', 
      icon: Github,
      color: 'hover:text-[#333]' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/wistantkode', 
      icon: Linkedin,
      color: 'hover:text-[#0077B5]' 
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/+237697135341', 
      icon: FaWhatsapp,
      color: 'hover:text-[#25D366]' 
    },
    { 
      name: 'Email', 
      href: 'mailto:wistantkode@protonmail.com', 
      icon: Mail,
      color: 'hover:text-primary' 
    },
  ];

  return (
    <footer className="relative mt-20">
      {/* Container with horizontal padding */}
      <div className="container mx-auto px-4">
        {/* Rounded card container */}
        <div className="relative bg-gradient-to-br from-background via-background to-muted/30 border border-border/50 rounded-t-[2.5rem] md:rounded-t-[3rem] overflow-hidden shadow-2xl">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
          
          {/* Gradient Accent on top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 px-4 md:px-8 lg:px-12">
            {/* Main Footer Content */}
            <div className="py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                
                {/* Column 1: About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
                      &lt; Wistant Kode /&gt;
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Fullstack Developer
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Transforming complex ideas into elegant, scalable digital solutions.
                  </p>
                  
                  {/* Availability Status */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-medium text-primary">Available for work</span>
                  </div>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">
                            {link.name}
                          </span>
                          <ArrowRight className="w-0 group-hover:w-4 h-4 ml-0 group-hover:ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Column 3: Social */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Connect
                  </h4>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 text-sm text-muted-foreground transition-colors group ${social.color}`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                            <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          </div>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {social.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>

                  {/* Column 4: CallToAction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Let's Work Together
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Have a project in mind? Let's build something amazing together.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-glow transition-all group"
                  >
                    Get In Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>
                  © {currentYear} Wistant Kode. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                  <span>in</span>
                  <span className="inline-flex items-center gap-1 font-medium text-foreground">
                    <MapPin className="w-4 h-4" />
                    Cameroon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
