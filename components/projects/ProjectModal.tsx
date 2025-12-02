"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, X, CheckCircle2, Calendar, Users, Briefcase, ArrowRight, Sparkles, Clock, Activity } from "lucide-react";
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

  // Use gallery if available, otherwise fallback to single image
  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery.slice(0, 3) 
    : [project.imageUrl].filter(Boolean) as string[];

  const renderGallery = () => {
    const count = galleryImages.length;

    if (count === 1) {
      return (
        <div className="relative w-full h-full min-h-[300px] lg:min-h-full group overflow-hidden">
          <Image
            src={galleryImages[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="grid grid-rows-2 gap-2 h-full min-h-[400px] lg:min-h-full p-2 bg-muted/10">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-full rounded-lg overflow-hidden border border-border/50 group shadow-sm">
              <Image
                src={img}
                alt={`${project.title} view ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      );
    }

    // 3 or more images
    return (
      <div className="grid grid-rows-2 gap-2 h-full min-h-[400px] lg:min-h-full p-2 bg-muted/10">
        {/* Top: Main Image */}
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-border/50 group shadow-sm">
          <Image
            src={galleryImages[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        {/* Bottom: 2 Smaller Images */}
        <div className="grid grid-cols-2 gap-2 h-full">
          {galleryImages.slice(1, 3).map((img, idx) => (
            <div key={idx} className="relative w-full h-full rounded-lg overflow-hidden border border-border/50 group shadow-sm">
              <Image
                src={img}
                alt={`${project.title} detail ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[85vh] p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl rounded-2xl duration-200">
        <div className="grid lg:grid-cols-12 h-full">
          
          {/* LEFT: Dynamic Gallery Section (5 cols) */}
          <div className="lg:col-span-5 h-64 lg:h-full bg-muted/5 border-r border-border/50 relative">
             {renderGallery()}
             
             {/* Mobile Close Button */}
             <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex lg:hidden items-center justify-center text-white border border-white/10 z-50"
              >
                <X className="w-4 h-4" />
              </button>
          </div>

          {/* RIGHT: Content Section (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full bg-background relative overflow-hidden">
            
            {/* Desktop Close Button */}
            <div className="absolute top-4 right-4 z-20 hidden lg:block">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="p-6 lg:p-8">
                
                {/* Header Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.status && (
                      <Badge variant={project.status === 'live' ? 'default' : 'secondary'} className="rounded-full px-2.5 py-0.5 text-xs font-medium capitalize">
                        {project.status === 'in-progress' ? (
                          <span className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            In Progress
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Live
                          </span>
                        )}
                      </Badge>
                    )}
                    {project.clientType && (
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider border border-border px-2 py-0.5 rounded-full">
                        {project.clientType}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.detailedDescription?.overview || project.description}
                  </p>
                </div>

                {/* Rich Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-muted/30 rounded-xl border border-border/50">
                  {/* Timeline / Dates */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Calendar className="w-3.5 h-3.5" /> Timeline
                    </div>
                    <div className="text-sm font-medium">
                      {project.timeline || "N/A"}
                    </div>
                    {project.completionDate && (
                      <div className="text-xs text-muted-foreground">
                        Completed: {project.completionDate}
                      </div>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Briefcase className="w-3.5 h-3.5" /> Role
                    </div>
                    <div className="text-sm font-medium">
                      {project.role || "Developer"}
                    </div>
                  </div>

                  {/* Team / Collaborators */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Users className="w-3.5 h-3.5" /> Team
                    </div>
                    <div className="text-sm font-medium">
                      {project.team || "Solo"}
                    </div>
                  </div>

                  {/* Status / Activity */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Activity className="w-3.5 h-3.5" /> Status
                    </div>
                    <div className="text-sm font-medium capitalize">
                      {project.status?.replace('-', ' ') || "Completed"}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary/50 border border-border/50 text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Features List */}
                {project.detailedDescription?.features && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold mb-3">Key Features</h3>
                    <ul className="grid gap-2">
                      {project.detailedDescription.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-5 border-t border-border bg-background/80 backdrop-blur-md sticky bottom-0 z-10">
              <div className="flex gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild className="flex-1 font-semibold shadow-lg shadow-primary/20">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.repoGit && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.repoGit} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4 mr-2" />
                      Source Code
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
