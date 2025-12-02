"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TechBadge } from "./TechBadge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, Code2, X, ExternalLink, Github, Calendar, Users } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    live: "En ligne",
    "in-progress": "En cours",
    archived: "Archivé",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-card border-border-light">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                {project.title}
              </DialogTitle>
              <div className="flex items-center gap-2 flex-wrap">
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
                {project.featured && (
                  <Badge className="text-xs bg-gradient-primary border-0">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Project Image */}
          {project.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-glow"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Description
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {project.detailedDescription?.overview || project.description}
            </p>
          </div>

          {/* Features */}
          {project.detailedDescription?.features &&
            project.detailedDescription.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Fonctionnalités principales
                </h3>
                <ul className="space-y-2">
                  {project.detailedDescription.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

          {/* Challenges */}
          {project.detailedDescription?.challenges && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Défis & Solutions
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.detailedDescription.challenges}
              </p>
            </div>
          )}

          <Separator className="bg-border" />

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Stack Technique
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <TechBadge key={idx} tech={tech} variant="default" />
              ))}
            </div>
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.completionDate && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted">Complété en</div>
                  <div className="text-sm font-medium text-text-primary">
                    {project.completionDate}
                  </div>
                </div>
              </div>
            )}
            {project.metrics?.githubStars !== undefined && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                <Github className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted">GitHub Stars</div>
                  <div className="text-sm font-medium text-text-primary">
                    {project.metrics.githubStars}
                  </div>
                </div>
              </div>
            )}
            {project.metrics?.contributors !== undefined && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted">Contributors</div>
                  <div className="text-sm font-medium text-text-primary">
                    {project.metrics.contributors}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator className="bg-border" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                asChild
                className="flex-1 bg-gradient-primary hover:opacity-90 border-0 shadow-primary"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir le site en ligne
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            {project.repoGit && (
              <Button
                asChild
                variant="outline"
                className="flex-1 border-border-light hover:border-primary hover:bg-primary/10"
              >
                <a
                  href={project.repoGit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  Voir le code source
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
