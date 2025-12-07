"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AboutCodeBlock from '../mvpblocks/AboutCodeBlock';
import GridBackground from "@/components/ui/GridBackground";

const AboutMe = () => (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <GridBackground variant="default" withFade={true} />

        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="bg-clip-text">
                            &lt; About Me /&gt;
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Exploring my technical journey through code.
                        <span className="block mt-2 text-base opacity-80">
                            Dive into my stack and professional profile below.
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* Content - Code Block Only */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
            >
                <AboutCodeBlock />
            </motion.div>
        </div>
    </section>
);

export default AboutMe;
