"use client";

import {BIG_SKILLS} from "@/lib/constants";
import {motion} from "framer-motion";
import {GlassCard} from "@/components/ui/glass-card";

export function SkillCard() {
    return (
        <div className="absolute inset-0 hidden lg:block">
            {BIG_SKILLS.map((skill, index) => {
                // Calcul de la position circulaire
                const angle = (index * (360 / BIG_SKILLS.length) - 90) * (Math.PI / 180);
                const radius = 350; // Distance depuis le centre
                const x = 50 + (Math.cos(angle) * radius) / 10; // Pourcentage
                const y = 50 + (Math.sin(angle) * radius) / 10; // Pourcentage

                return (
                    <motion.div
                        key={skill.name}
                        initial={{opacity: 0, scale: 0, rotate: -180}}
                        whileInView={{opacity: 1, scale: 1, rotate: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 0.8,
                            delay: 1.5 + index * 0.2,
                            type: "spring",
                            stiffness: 100,
                        }}
                        whileHover={{scale: 1.1, zIndex: 5}}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-3"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                        }}
                    >
                        <GlassCard
                            className="p-4 hover:shadow-2xl transition-all duration-300 w-48"
                            hover
                        >
                            <div className="flex flex-col items-center text-center space-y-3">
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                                >
                                    <skill.icon className="w-6 h-6 text-white"/>
                                </div>

                                {/* Nom et niveau */}
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">
                                        {skill.name}
                                    </h3>
                                    <span className="text-cyan-400 font-medium text-sm">
                    {skill.level}%
                  </span>
                                </div>

                                {/* Barre de progression */}
                                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                        initial={{width: 0}}
                                        whileInView={{width: `${skill.level}%`}}
                                        viewport={{once: true}}
                                        transition={{
                                            duration: 1.5,
                                            delay: 2 + index * 0.1,
                                            ease: "easeOut",
                                        }}
                                    />
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {skill.technologies.slice(0, 2).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70"
                                        >
                      {tech}
                    </span>
                                    ))}
                                    {skill.technologies.length > 2 && (
                                        <span
                                            className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">
                      +{skill.technologies.length - 2}
                    </span>
                                    )}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                );
            })}
        </div>
    );
}
