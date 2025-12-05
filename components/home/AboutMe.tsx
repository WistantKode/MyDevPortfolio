"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal, { TerminalCommand } from '../terminal/Terminal';
import TextMode from '../terminal/TextMode';
import ModeToggle from '../terminal/ModeToggle';
import GridBackground from "@/components/ui/GridBackground";

const AboutMe = () => {
    const [mode, setMode] = useState<'terminal' | 'text'>('terminal');

    const terminalCommands: TerminalCommand[] = [
        {
            id: '1',
            command: 'whoami',
            output: 'Wistant Kode - Fullstack Developer',
        },
        {
            id: '2',
            command: 'cat about.txt',
            output: [
                'Passionate developer with 5+ years of experience',
                'Specializing in building scalable web applications',
                'Transforming complex ideas into elegant digital solutions',
            ],
        },
        {
            id: '3',
            command: 'ls -la ~/skills',
            output: [
                'drwxr-xr-x  frontend/',
                '  ├── React.js',
                '  ├── Next.js', 
                '  ├── TypeScript',
                '  └── Tailwind CSS',
                '',
                'drwxr-xr-x  backend/',
                '  ├── NestJS',
                '  ├── Node.js',
                '  ├── PostgreSQL',
                '  └── Prisma ORM',
            ],
        },
        {
            id: '4',
            command: 'cat experience.json',
            output: [
                '{',
                '  "years": "5+",',
                '  "specialization": "Fullstack Development",',
                '  "focus": ["Scalability", "Performance", "Security"],',
                '  "passion": "Building elegant solutions"',
                '}',
            ],
        },
        {
            id: '5',
            command: 'echo $AVAILABILITY',
            output: '✅ Available for freelance projects and collaborations',
        },
        {
            id: '6',
            command: './start_project.sh',
            output: [
                '🚀 Initializing new project...',
                '📦 Installing dependencies...',
                '✨ Ready to build something amazing!',  
                '',
                '👉 Contact me to get started: wistantkode@protonmail.com',
            ],
        },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <GridBackground variant="default" withFade={true} />
            <div
                className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header with Mode Toggle */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                {mode === 'terminal' ? '$ whoami' : 'About Me'}
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            {mode === 'terminal' 
                                ? 'Explore my profile through terminal commands' 
                                : 'Get to know me and my skills'
                            }
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <ModeToggle mode={mode} onToggle={setMode} />
                    </motion.div>
                </div>

                {/* Content - Terminal or Text */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {mode === 'terminal' ? (
                            <motion.div
                                key="terminal"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Terminal commands={terminalCommands} autoPlay={true} />
                            </motion.div>
                        ) : (
                            <TextMode key="text" />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
