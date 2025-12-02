"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, ExternalLink, X, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const statusConfig = {
    live: { color: "bg-green-500/10 text-green-500 border-green-500/30", label: "Live" },
    "in-progress": { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30", label: "In Progress" },
    archived: { color: "bg-gray-500/10 text-gray-500 border-gray-500/30", label: "Archived" },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50">
        <div className="grid md:grid-cols-2 h-full">
          {/* LEFT: Image Section */}
          <div className="relative bg-gradient-to-br from-primary/5 via-background to-background md:h-full h-64">
            {project.imageUrl ? (
              <>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-primary/20">📦</div>
              </div>
            )}

            {/* Close Button - Top Right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-md border border-border/50 hover:bg-background hover:scale-110 transition-all flex items-center justify-center group z-10"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Badges Overlay - Bottom Left */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {project.status && (
                <Badge variant="outline" className={cn("backdrop-blur-md", statusConfig[project.status].color)}>
                  {statusConfig[project.status].label}
                </Badge>
              )}
              {project.featured && (
                <Badge className="bg-gradient-primary backdrop-blur-md border-0">
                  ⭐ Featured
                </Badge>
              )}
            </div>
          </div>

          {/* RIGHT: Content Section */}
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-8 flex-1">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                  {project.title}
                </h2>
                {project.clientType && (
                  <p className="text-sm text-text-muted uppercase tracking-wider">
                    {project.clientType === "open-source" ? "Open Source Project" : `${project.clientType} Project`}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-text-secondary leading-relaxed">
                  {project.detailedDescription?.overview || project.description}
                </p>
              </div>

              {/* Features Grid */}
              {project.detailedDescription?.features && project.detailedDescription.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {project.detailedDescription.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.detailedDescription?.challenges && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                    Challenges & Solutions
                  </h3>
                  <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <p className="text-sm text-text-secondary leading-relaxed italic">
                      "{project.detailedDescription.challenges}"
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/20 hover:border-primary/50 hover:from-primary/10 hover:to-primary/5 transition-all"
                      >
                        <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-text-secondary group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Metadata */}
              {(project.completionDate || project.metrics) && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-border/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {project.completionDate && (
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.completionDate}
                        </div>
                        <div className="text-xs text-text-muted uppercase tracking-wide">Completed</div>
                      </div>
                    )}
                    {project.metrics?.githubStars !== undefined && (
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.metrics.githubStars}
                        </div>
                        <div className="text-xs text-text-muted uppercase tracking-wide">Stars</div>
                      </div>
                    )}
                    {project.metrics?.contributors !== undefined && (
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {project.metrics.contributors}
                        </div>
                        <div className="text-xs text-text-muted uppercase tracking-wide">Contributors</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 bg-gradient-to-t from-secondary/5 to-transparent border-t border-border/30">
              <div className="flex gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button
                    asChild
                    className="flex-1 bg-gradient-primary hover:opacity-90 border-0 shadow-lg shadow-primary/20 group"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Live
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
                {project.repoGit && (
                  <Button
                    asChild
                    variant="outline"
                    className={cn(
                      "border-border/50 hover:border-primary hover:bg-primary/5 group",
                      !project.liveUrl || project.liveUrl === "#" ? "flex-1" : ""
                    )}
                  >
                    <a href={project.repoGit} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4 mr-2" />
                      Source Code
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
