"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, X, CheckCircle2, Clock, Users, Briefcase, ArrowRight, Sparkles } from "lucide-react";
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

  // Use gallery if available, otherwise fallback to single image repeated or just single
  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery.slice(0, 3) 
    : [project.imageUrl, project.imageUrl, project.imageUrl].filter(Boolean) as string[];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[80vh] p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl rounded-2xl duration-200">
        <div className="grid lg:grid-cols-12 h-full">
          
          {/* LEFT: Gallery Section (7 cols) */}
          <div className="lg:col-span-7 bg-muted/10 h-full overflow-y-auto p-4 lg:p-6 scrollbar-hide">
            <div className="grid grid-cols-1 gap-4 h-full content-start">
              {/* Main Large Image - Reduced Height */}
              {galleryImages[0] && (
                <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg border border-border/50 group">
                  <Image
                    src={galleryImages[0]}
                    alt={`${project.title} - Main View`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              )}
              
              {/* Secondary Images Grid - Reduced Height */}
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden shadow-md border border-border/50 group">
                    <Image
                      src={img}
                      alt={`${project.title} - Detail View ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile Close Button (Absolute) */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex lg:hidden items-center justify-center border border-border shadow-lg z-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Content Section (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full bg-background border-l border-border/50 relative">
            
            {/* Desktop Close Button */}
            <div className="absolute top-4 right-4 z-20 hidden lg:block">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
              {/* Header */}
              <div className="mb-8 pr-12">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {project.clientType && (
                    <Badge variant="secondary" className="rounded-full px-3 font-normal bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      {project.clientType}
                    </Badge>
                  )}
                  {project.status && (
                    <Badge variant="outline" className="rounded-full px-3 font-normal capitalize">
                      {project.status.replace('-', ' ')}
                    </Badge>
                  )}
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.detailedDescription?.overview || project.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10 p-5 bg-muted/30 rounded-2xl border border-border/50">
                {project.role && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Briefcase className="w-3.5 h-3.5" /> Role
                    </div>
                    <div className="font-medium">{project.role}</div>
                  </div>
                )}
                {project.timeline && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Clock className="w-3.5 h-3.5" /> Timeline
                    </div>
                    <div className="font-medium">{project.timeline}</div>
                  </div>
                )}
                {project.team && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Users className="w-3.5 h-3.5" /> Team
                    </div>
                    <div className="font-medium">{project.team}</div>
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> Tech
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map(t => t.name).join(', ')}
                    {project.tech.length > 3 && ` +${project.tech.length - 3}`}
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-10">
                {/* Key Features */}
                {project.detailedDescription?.features && (
                  <section>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.detailedDescription.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Challenges */}
                {project.detailedDescription?.challenges && (
                  <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="text-lg font-bold mb-3">Challenges & Solutions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.detailedDescription.challenges}
                    </p>
                  </section>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border bg-background/80 backdrop-blur-md sticky bottom-0 z-10">
              <div className="flex gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild size="lg" className="flex-1 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.repoGit && (
                  <Button asChild variant="outline" size="lg" className="flex-1 bg-background hover:bg-muted">
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
