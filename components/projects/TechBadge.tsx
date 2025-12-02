"use client";

import { Tech } from "@/lib/projet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: Tech;
  variant?: "default" | "filter" | "project";
  onClick?: () => void;
  isSelected?: boolean;
}

export function TechBadge({
  tech,
  variant = "default",
  onClick,
  isSelected = false,
}: TechBadgeProps) {
  const Icon = tech.icon;

  const variants = {
    default: "bg-secondary/50 text-text-secondary hover:bg-secondary hover:text-primary",
    filter: isSelected
      ? "bg-gradient-primary text-primary-foreground border-0"
      : "bg-secondary/30 text-text-secondary hover:bg-secondary border border-border-light",
    project: "bg-card/50 border border-border text-text-secondary hover:border-primary/50 hover:text-primary",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        variants[variant],
        onClick && "cursor-pointer"
      )}
      disabled={!onClick}
    >
      <Icon className="w-4 h-4" />
      <span>{tech.name}</span>
    </motion.button>
  );
}
