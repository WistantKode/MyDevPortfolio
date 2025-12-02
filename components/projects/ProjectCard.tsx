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
  const statusColors = {
    live: "bg-green-500/10 text-green-500 border-green-500/20",
    "in-progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    archived: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  };

  const statusLabels = {
    live: "Live",
    "in-progress": "In Progress",
    archived: "Archived",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onViewDetails(project)}
      className={cn(
        "group relative cursor-pointer",
        project.featured && "md:col-span-2"
      )}
    >
      {/* Main Card Container */}
      <div className="relative h-full bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
        {/* Background Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Image Section */}
          {project.imageUrl && (
            <div
              className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden mb-5 shadow-lg cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onImageClick?.(project.imageUrl || "");
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* View Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {project.status && (
              <Badge
                variant="outline"
                className={cn("text-xs font-medium", statusColors[project.status])}
              >
                {statusLabels[project.status]}
              </Badge>
            )}
            {project.featured && (
              <Badge className="text-xs bg-gradient-primary border-0 shadow-sm">
                Featured
              </Badge>
            )}
            {project.clientType && (
              <Badge variant="secondary" className="text-xs capitalize">
                {project.clientType === "open-source" ? "Open Source" : project.clientType}
              </Badge>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            {project.tech.slice(0, 5).map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 hover:scale-110"
                  title={tech.name}
                >
                  <Icon className="w-4 h-4" />
                </div>
              );
            })}
            {project.tech.length > 5 && (
              <div className="text-xs text-text-muted">+{project.tech.length - 5}</div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
              className="flex-1 bg-gradient-primary hover:opacity-90 border-0 shadow-md hover:shadow-lg transition-all duration-200 group/btn"
            >
              View Details
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
            
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="border-border-light hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Site">
                  <Eye className="w-4 h-4" />
                </a>
              </Button>
            )}
            
            {project.repoGit && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="border-border-light hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.repoGit} target="_blank" rel="noopener noreferrer" title="View Source Code">
                  <Code2 className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
