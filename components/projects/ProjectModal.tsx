"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, ExternalLink, Calendar, Github, Users, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-gradient-card border-border">
        {/* Header with Image */}
        {project.imageUrl && (
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title and Badges */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                {project.title}
              </h2>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              {project.status && (
                <Badge
                  variant="outline"
                  className={cn("text-xs", statusColors[project.status])}
                >
                  {statusLabels[project.status]}
                </Badge>
              )}
              {project.featured && (
                <Badge className="text-xs bg-gradient-primary border-0">
                  Featured
                </Badge>
              )}
              {project.clientType && (
                <Badge variant="secondary" className="text-xs capitalize">
                  {project.clientType === "open-source" ? "Open Source" : project.clientType}
                </Badge>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              About this project
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {project.detailedDescription?.overview || project.description}
            </p>
          </div>

          {/* Features */}
          {project.detailedDescription?.features && project.detailedDescription.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Key Features
              </h3>
              <div className="grid gap-2">
                {project.detailedDescription.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.detailedDescription?.challenges && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Challenges & Solutions
              </h3>
              <div className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.detailedDescription.challenges}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-text-secondary hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Metadata */}
          {(project.completionDate || project.metrics) && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.completionDate && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-text-muted">Completed</div>
                      <div className="text-sm font-medium text-text-primary truncate">
                        {project.completionDate}
                      </div>
                    </div>
                  </div>
                )}
                {project.metrics?.githubStars !== undefined && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <Github className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-text-muted">GitHub Stars</div>
                      <div className="text-sm font-medium text-text-primary">
                        {project.metrics.githubStars}
                      </div>
                    </div>
                  </div>
                )}
                {project.metrics?.contributors !== undefined && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-text-muted">Contributors</div>
                      <div className="text-sm font-medium text-text-primary">
                        {project.metrics.contributors}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                asChild
                className="flex-1 bg-gradient-primary hover:opacity-90 border-0 shadow-md"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4 mr-2" />
                  View Live Site
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            {project.repoGit && (
              <Button
                asChild
                variant="outline"
                className="flex-1 border-border hover:border-primary hover:bg-primary/10"
              >
                <a href={project.repoGit} target="_blank" rel="noopener noreferrer">
                  <Code2 className="w-4 h-4 mr-2" />
                  View Source Code
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
