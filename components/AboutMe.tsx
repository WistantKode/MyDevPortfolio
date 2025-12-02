"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Code, Database, Download, Globe, Heart, Mail, Palette} from "lucide-react";
import {AppearOnScroll, AppearOnSrollToLeft, ScaleTextEffect,} from "@/components/ScrollEffect";

const AboutMe = () => {
    return (
        <AppearOnScroll>
            <section className="py-20 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <ScaleTextEffect>
                            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                                About Wistant
                            </h1>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                                A clear-cut overview of my background and my commitment to application architecture.
                            </p>
                        </ScaleTextEffect>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <AppearOnSrollToLeft>
                            <div className="flex justify-center">
                                <div className="relative w-80 h-96">
                                    <Image 
                                        src="/me.png" 
                                        alt="Wistant Kode"
                                        fill
                                        className="rounded-2xl shadow-card border border-border-light object-cover"
                                    />
                                </div>
                            </div>
                        </AppearOnSrollToLeft>
                        <div className="space-y-8">
                            <div>
                                <AppearOnScroll>
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 title3">
                                        Who is Wistant?
                                    </h2>
                                </AppearOnScroll>
                                <AppearOnScroll>
                                    <div className="space-y-4 text-text-secondary text-lg leading-relaxed title1">
                                        <p>
                                            I am Wistant, an ardent web developer and Computer Science student operating from Yaoundé, Cameroon. My focus is on engineering **performant and innovative digital solutions.
                                        </p>
                                        <p>
                                            My core expertise lies in full-stack development and robust software architecture**. I utilize a system-centric approach to build reliable, intuitive solutions that scale seamlessly and meet precise business requirements.
                                        </p>
                                        <p>
                                            Currently, I leverage my ongoing computer science studies alongside practical project work—ranging from high-impact corporate websites to complex, integrated web applications. I thrive on tackling new technical challenges and continually upgrading my knowledge base.
                                        </p>
                                    </div>
                                </AppearOnScroll>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <AppearOnScroll>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                                    >
                                        <a href="mailto:wistantkode@protonmail.com">
                                            <Mail className="mr-2 w-5 h-5" />
                                            Initiate Contact
                                        </a>
                                    </Button>
                                </AppearOnScroll>
                                <AppearOnScroll>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        asChild
                                        className="border-border-light hover:border-primary hover:bg-primary/10"
                                    >
                                        <a
                                            href="/cv/cv%20-%20wistant.pdf"
                                            download
                                        >
                                            <Download className="mr-2 w-5 h-5" />
                                            Download Resume
                                        </a>
                                    </Button>
                                </AppearOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppearOnScroll>
    );
};

export default AboutMe;
