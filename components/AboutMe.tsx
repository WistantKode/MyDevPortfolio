"use client";

import Layout from "@/components/layout/layout";
import {Button} from "@/components/ui/button";

import {Code, Database, Download, Globe, Heart, Mail, Palette} from "lucide-react";
import {AppearOnScroll, AppearOnSrollToLeft, ScaleTextEffect,} from "@/components/ScrollEffect";


const AboutMe = () => {
    const skills = [
        { icon: Database, name: "Backend Development", level: 80 },
        { icon: Code, name: "Frontend Development", level: 70 },
        { icon: Palette, name: "Desktop Development", level: 60 },
        { icon: Globe, name: "Web Technologies", level: 49 },
        { icon: Heart, name: "SEO & search enging", level: 80 },
    ];

    return (
        <Layout
            title="Wistant Kode | Portfolio |  Backend System Architect & IT Student"
            description="Discover Wistant's journey, skills, and passion for engineering robust backend systems and modern digital solutions based in Yaoundé, Cameroon."
            keywords="about, Wistant, software architecture, backend specialist, web developer, IT student, professional experience, Yaoundé, Cameroon"
        >
            <AppearOnScroll>
                <section className="py-20 bg-background min-h-screen">
                    <div className="container mx-auto px-4">
                        {/* Hero Section */}
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
                            {/* Image Placeholder (assuming the image is an internal asset) */}
                            {/* Content */}
                            <AppearOnScroll>
                                <AppearOnSrollToLeft>
                                    <div className="flex justify-center">
                                        <div className="relative">
                                            <div className="w-80 h-96  rounded-2xl shadow-card border border-border-light overflow-hidden">
                                                <div
                                                    className="absolute inset-0 opacity-20"
                                                    style={{
                                                        backgroundImage: `url(public/me.png)`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10" />
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="text-center">
                                                        <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          WK
                        </span>
                                                        </div>
                                                        <p className="text-text-primary font-semibold">
                                                            Wistant Kode
                                                        </p>
                                                        <p className="text-text-secondary text-sm">
                                                            Backend System Architect
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AppearOnSrollToLeft>
                            </AppearOnScroll>
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

                        {/* Note: Skills and CTA sections are commented out but translated for consistency if you activate them later. */}

                        {/* Skills Section (Commented out in source) */}
                        {/*<div className="mb-20 flex justify-center flex-col">*/}
                        {/* <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">*/}
                        {/* Core Competencies*/}
                        {/* </h3>*/}
                        {/* ... Skill cards would go here ...*/}
                        {/*</div>*/}

                        {/*/!* Contact CTA (Commented out in source) *!/*/}
                        {/*<div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">*/}
                        {/* <h3 className="text-3xl font-bold text-text-primary mb-4 title3">*/}
                        {/* Let's Engineer a Solution Together*/}
                        {/* </h3>*/}
                        {/* <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto title1">*/}
                        {/* Have a complex challenge in mind? I welcome the discussion to analyze your needs and outline a robust implementation strategy.*/}
                        {/* </p>*/}
                        {/* <Button*/}
                        {/* asChild*/}
                        {/* size="lg"*/}
                        {/* className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"*/}
                        {/* >*/}
                        {/* <a href="/contact">Start a Project</a>*/}
                        {/* </Button>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </AppearOnScroll>
        </Layout>
    );
};

export default AboutMe;