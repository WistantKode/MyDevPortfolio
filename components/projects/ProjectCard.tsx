"use client";

import { Project } from "@/lib/projet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "./TechBadge";
import { motion } from "framer-motion";
import { Eye, Code2, Bookmark, ExternalLink } from "lucide-react";
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
    live: "En ligne",
    "in-progress": "En cours",
    archived: "Archivé",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "group h-full",
        project.featured && "md:col-span-2 md:row-span-2"
      )}
    >
      <Card className="bg-gradient-card border border-border-light hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow h-full flex flex-col relative overflow-hidden">
        {/* Featured Ribbon */}
        {project.featured && (
          <div className="absolute top-4 -right-12 bg-gradient-primary text-primary-foreground text-xs font-bold px-12 py-1 rotate-45 z-10 shadow-primary">
            FEATURED
          </div>
        )}

        <CardHeader className="relative">
          {/* Project Image */}
          {project.imageUrl && (
            <div
              className={cn(
                "relative w-full rounded-xl overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform shadow-primary cursor-pointer",
                project.featured ? "h-64" : "h-40"
              )}
              onClick={() => onImageClick?.(project.imageUrl || "")}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
            </div>
          )}

          {/* Status & Client Type Badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {project.status && (
              <Badge
                variant="outline"
                className={cn("text-xs", statusColors[project.status])}
              >
                {statusLabels[project.status]}
              </Badge>
            )}
            {project.clientType && (
              <Badge variant="secondary" className="text-xs capitalize">
                {project.clientType === "open-source"
                  ? "Open Source"
                  : project.clientType}
              </Badge>
            )}
          </div>

          {/* Title & Description */}
          <CardTitle
            className={cn(
              "text-text-primary mb-2 title3 line-clamp-2",
              project.featured ? "text-2xl" : "text-xl"
            )}
          >
            {project.title}
          </CardTitle>
          <p
            className={cn(
              "text-text-secondary title2 line-clamp-3",
              project.featured && "line-clamp-4"
            )}
          >
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col flex-grow">
          {/* Tech Stack */}
          <div className="mb-6 flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, project.featured ? 6 : 4).map((tech, idx) => (
                <TechBadge key={idx} tech={tech} variant="project" />
              ))}
              {project.tech.length > (project.featured ? 6 : 4) && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - (project.featured ? 6 : 4)} more
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-border pt-4 mt-auto space-y-2">
            {/* View Details Button */}
            <Button
              onClick={() => onViewDetails(project)}
              variant="outline"
              className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary/10 text-primary"
            >
              Voir les détails
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>

            {/* Quick Actions */}
            <div className="flex gap-2">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border-light hover:border-primary hover:bg-primary/10"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live
                  </a>
                </Button>
              )}
              {project.repoGit && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border-light hover:border-primary hover:bg-primary/10"
                >
                  <a
                    href={project.repoGit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
