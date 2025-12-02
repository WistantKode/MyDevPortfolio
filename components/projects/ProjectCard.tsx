"use client";

import { Project } from "@/lib/projet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Eye } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
  onImageClick?: (imageUrl: string) => void;
}

export function ProjectCard({
  project,
  index,
  onViewDetails,
  onImageClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative h-full",
        project.featured && "md:col-span-2"
      )}
    >
      <div 
        onClick={() => onViewDetails(project)}
        className="relative h-full bg-card hover:bg-accent/5 rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg flex flex-col"
      >
        {/* Image Section with "Fondu" Effect */}
        <div className="relative w-full h-56 md:h-64 overflow-hidden">
          {project.imageUrl && (
            <>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Le "Fondu" - Gradient Overlay fading into content */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            </>
          )}
          
          {/* Content overlaid on the bottom of the image/gradient */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {/* Status Badge */}
            {project.status && (
              <Badge 
                variant="secondary" 
                className="mb-2 bg-background/50 backdrop-blur-md border-white/10 text-xs font-medium"
              >
                {project.status === 'in-progress' ? 'In Progress' : 'Live'}
              </Badge>
            )}
            
            <h3 className="text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            {project.clientType && (
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">
                {project.clientType}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-5 pt-2">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack - Simple Icons */}
          <div className="flex items-center gap-2 mb-5">
            {project.tech.slice(0, 5).map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={tech.name}
                >
                  <Icon className="w-4 h-4" />
                </div>
              );
            })}
            {project.tech.length > 5 && (
              <span className="text-xs text-muted-foreground">+{project.tech.length - 5}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
            >
              View Case Study
            </Button>
            
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <Eye className="w-4 h-4" />
              </Button>
            )}
            
            {project.repoGit && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.repoGit, '_blank');
                }}
              >
                <Code2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
