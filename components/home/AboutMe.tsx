"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutCodeBlock from '../mvpblocks/AboutCodeBlock';
import TextMode from '../terminal/TextMode';
import ModeToggle from '../terminal/ModeToggle';
import GridBackground from "@/components/ui/GridBackground";

const AboutMe = () => {
    const [mode, setMode] = useState<'terminal' | 'text'>('terminal');

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
                                {mode === 'terminal' ? '< AboutWistant />' : 'About Me'}
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            {mode === 'terminal' 
                                ? 'Discover me through React code with animated border' 
                                : 'Get to know me and my journey'
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

                {/* Content - Code Block or Text */}
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        {mode === 'terminal' ? (
                            <motion.div
                                key="code-block"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <AboutCodeBlock />
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
