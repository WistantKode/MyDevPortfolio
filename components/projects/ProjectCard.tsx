"use client";

import { Project } from "@/lib/projet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Eye, Sparkles } from "lucide-react";
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
  const statusConfig = {
    live: { color: "bg-green-500/10 text-green-500 border-green-500/30", label: "Live" },
    "in-progress": { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30", label: "In Progress" },
    archived: { color: "bg-gray-500/10 text-gray-500 border-gray-500/30", label: "Archived" },
  };

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
      {/* Card Container with Glass Effect */}
      <div 
        onClick={() => onViewDetails(project)}
        className="relative h-full bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm rounded-2xl border border-border/40 overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10" />

        {/* Content */}
        <div className="relative flex flex-col h-full">
          {/* Image Section */}
          {project.imageUrl && (
            <div 
              className="relative w-full h-52 overflow-hidden"
              onClick={(e) => {
                e.stopPropagation();
                onImageClick?.(project.imageUrl || "");
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Featured Badge - Top Right */}
              {project.featured && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-gradient-primary backdrop-blur-md border-0 shadow-lg px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Status Badge - Top Left */}
              {project.status && (
                <div className="absolute top-3 left-3">
                  <Badge 
                    variant="outline" 
                    className={cn("backdrop-blur-md", statusConfig[project.status].color)}
                  >
                    {statusConfig[project.status].label}
                  </Badge>
                </div>
              )}
              
              {/* Hover Overlay with Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/60 backdrop-blur-md">
                <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="flex flex-col flex-1 p-5">
            {/* Title */}
            <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            {/* Client Type */}
            {project.clientType && (
              <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
                {project.clientType === "open-source" ? "Open Source" : project.clientType}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-grow">
              {project.description}
            </p>

            {/* Tech Stack - Icons Grid */}
            <div className="mb-5">
              <div className="flex items-center gap-2 flex-wrap">
                {project.tech.slice(0, 6).map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={idx}
                      className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/60 to-secondary/40 border border-border/20 flex items-center justify-center text-primary hover:from-primary/10 hover:to-primary/5 hover:border-primary/50 hover:scale-110 transition-all duration-200"
                      title={tech.name}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  );
                })}
                {project.tech.length > 6 && (
                  <div className="text-xs text-text-muted font-medium">
                    +{project.tech.length - 6}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-5" />

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(project);
                }}
                className="flex-1 bg-gradient-primary hover:opacity-90 border-0 shadow-md shadow-primary/20 group/btn text-sm h-10"
              >
                View Details
                <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
              
              <div className="flex gap-2">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-border/40 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Site">
                      <Eye className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                
                {project.repoGit && (
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 border-border/40 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.repoGit} target="_blank" rel="noopener noreferrer" title="Source Code">
                      <Code2 className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
