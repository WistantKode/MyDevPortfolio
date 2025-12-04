"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Code2, Database, Download, Layout, Mail, Terminal, Zap} from "lucide-react";
import {motion} from "framer-motion";

const AboutMe = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="about">
            {/* Background Elements */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div
                className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            
            {/* Fade Overlays for smooth transitions */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="relative"
                    >
                        <div
                            className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                            <Image
                                src="/me.png"
                                alt="Wistant Kode"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white mb-2">
                                      <span className="relative flex h-2 w-2">
                                        <span
                                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                      </span>
                                    Open to Work
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div
                            className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            À propos de <span className="text-primary">Moi</span>
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Je suis un jeune développeur en <span className="text-foreground font-medium">Génie Logiciel</span>,
                                animé par l’envie de créer des expériences propres, utiles et modernes.
                            </p>
                            <p>
                                J’avance avec une énergie brute mais déterminée : j’apprends vite, je m’adapte vite, et
                                je n’ai aucun problème à plonger dans un sujet qui me dépasse encore.
                            </p>
                            <p>
                                Mon objectif est simple : transformer des problèmes complexes en solutions digitales
                                élégantes et performantes.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild size="lg" className="h-12 px-6 text-base shadow-lg shadow-primary/20">
                                <a href="mailto:wistantkode@protonmail.com">
                                    <Mail className="mr-2 w-5 h-5"/>
                                    Me Contacter
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg"
                                    className="h-12 px-6 text-base bg-background hover:bg-muted/50">
                                <a href="/cv/cv%20-%20wistant.pdf" download>
                                    <Download className="mr-2 w-5 h-5"/>
                                    Télécharger CV
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid - Forces */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Terminal className="w-6 h-6 text-primary"/>
                            Mes Forces
                        </h3>
                        <div className="h-px flex-1 bg-border/50"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1: Frontend */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4}}
                            className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all group"
                        >
                            <div
                                className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Code2 className="w-6 h-6 text-blue-500"/>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Front-end Moderne</h4>
                            <p className="text-sm text-muted-foreground">
                                Je construis des interfaces propres, intuitives et utiles grâce à <span
                                className="text-foreground font-medium">React</span> et <span
                                className="text-foreground font-medium">Next.js</span>.
                            </p>
                        </motion.div>

                        {/* Card 2: Backend */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.1}}
                            className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all group"
                        >
                            <div
                                className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6 text-red-500"/>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Backend Scalable</h4>
                            <p className="text-sm text-muted-foreground">
                                Montée en compétence sur <span className="text-foreground font-medium">NestJS</span>.
                                Architecture propre, code modulaire et intégration d'IA.
                            </p>
                        </motion.div>

                        {/* Card 3: UI/UX */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                            className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all group"
                        >
                            <div
                                className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Layout className="w-6 h-6 text-purple-500"/>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Vision UI/UX</h4>
                            <p className="text-sm text-muted-foreground">
                                Sens du détail, cohérence et simplicité. Je ne fais pas juste du code, je crée des
                                produits utilisables.
                            </p>
                        </motion.div>

                        {/* Card 4: Mindset */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.3}}
                            className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all group"
                        >
                            <div
                                className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 text-yellow-500"/>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Apprentissage Rapide</h4>
                            <p className="text-sm text-muted-foreground">
                                Je progresse vite et capitalise sur chaque expérience. Motivation constante pour relever
                                les défis.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
