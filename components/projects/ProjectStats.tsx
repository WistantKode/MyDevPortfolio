"use client";

import {motion} from "framer-motion";
import {Code, Folder, Layers} from "lucide-react";

interface ProjectStatsProps {
  totalProjects: number;
  totalTechnologies: number;
  totalCategories: number;
}

export function ProjectStats({
  totalProjects,
  totalTechnologies,
  totalCategories,
}: ProjectStatsProps) {
  const stats = [
    {
      icon: Folder,
      label: "Projets",
        // Removed unclosed string literal "ts"
      value: totalProjects,
      delay: 0,
    },
    {
      icon: Code,
      label: "Technologies",
      value: totalTechnologies,
      delay: 0.1,
    },
    {
      icon: Layers,
        label: "Catégories",
      value: totalCategories,
      delay: 0.2,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.delay }}
            className="relative group"
          >
            <div className="bg-gradient-card border border-border-light rounded-xl p-4 md:p-6 text-center hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: stat.delay + 0.3 }}
                className="text-2xl md:text-3xl font-bold text-text-primary mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs md:text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
