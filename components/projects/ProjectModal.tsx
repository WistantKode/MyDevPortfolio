"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, X, CheckCircle2, Calendar, Users, Briefcase, Activity, Sparkles, FileText, Download, Layers, ArrowRight } from "lucide-react";
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

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery.slice(0, 3) 
    : [project.imageUrl].filter(Boolean) as string[];

  const renderGallery = () => {
    const count = galleryImages.length;

    if (count === 1) {
      return (
        <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-md border border-border/50 group">
          <Image
            src={galleryImages[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="grid grid-cols-1 gap-3">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-48 lg:h-56 rounded-xl overflow-hidden shadow-md border border-border/50 group">
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
      <div className="grid grid-cols-1 gap-3">
        {/* Top: Main Image */}
        <div className="relative w-full h-56 lg:h-64 rounded-xl overflow-hidden shadow-md border border-border/50 group">
          <Image
            src={galleryImages[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        {/* Bottom: 2 Smaller Images */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.slice(1, 3).map((img, idx) => (
            <div key={idx} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden shadow-md border border-border/50 group">
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
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 gap-0 bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl rounded-2xl duration-200 flex flex-col overflow-hidden">
        <div className="grid lg:grid-cols-12 h-full overflow-hidden">
          
          {/* LEFT: Gallery & Metadata (5 cols) - Scrollable */}
          <div className="lg:col-span-5 h-full bg-muted/5 border-r border-border/50 relative flex flex-col overflow-hidden">
             <div className="flex-1 overflow-y-auto scrollbar-hide p-5 lg:p-6">
               
               {/* Gallery Section */}
               <div className="mb-6">
                 <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                   <Layers className="w-3.5 h-3.5" /> Gallery
                 </h3>
                 {renderGallery()}
               </div>

               {/* Download Docs Button */}
               {project.docsUrl && (
                 <div className="mb-8">
                   <Button variant="outline" className="w-full h-12 border-dashed border-primary/30 hover:border-primary/60 hover:bg-primary/5 text-primary gap-2 group">
                     <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                     <span className="font-medium">Download Project Specifications</span>
                     <Download className="w-3.5 h-3.5 ml-auto opacity-50" />
                   </Button>
                 </div>
               )}

               {/* Metadata Grid */}
               <div className="grid grid-cols-2 gap-4 p-4 bg-background/50 rounded-xl border border-border/50 shadow-sm">
                  {/* Timeline */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Calendar className="w-3.5 h-3.5" /> Timeline
                    </div>
                    <div className="text-sm font-medium">
                      {project.timeline || "N/A"}
                    </div>
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

                  {/* Team */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Users className="w-3.5 h-3.5" /> Team
                    </div>
                    <div className="text-sm font-medium">
                      {project.team || "Solo"}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      <Activity className="w-3.5 h-3.5" /> Status
                    </div>
                    <div className="text-sm font-medium capitalize flex items-center gap-2">
                      {project.status === 'in-progress' && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                      )}
                      {project.status === 'live' && (
                        <span className="relative flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      )}
                      {project.status?.replace('-', ' ') || "Completed"}
                    </div>
                  </div>
               </div>
             </div>
             
             {/* Mobile Close Button */}
             <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex lg:hidden items-center justify-center text-white border border-white/10 z-50"
              >
                <X className="w-4 h-4" />
              </button>
          </div>

          {/* RIGHT: Content & Story (7 cols) - Scrollable */}
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
              <div className="p-6 lg:p-10">
                
                {/* Header Info */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {project.clientType && (
                      <span className="text-xs font-medium text-primary uppercase tracking-wider border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">
                        {project.clientType}
                      </span>
                    )}
                    {project.completionDate && (
                      <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                        {project.completionDate}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.detailedDescription?.overview || project.description}
                  </p>
                </div>

                {/* Key Features Grid (Top Priority) */}
                {project.detailedDescription?.features && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.detailedDescription.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges (Middle) */}
                {project.detailedDescription?.challenges && (
                   <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4">Challenges & Solutions</h3>
                    <div className="p-5 rounded-xl bg-card border border-border/50 shadow-sm">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.detailedDescription.challenges}
                      </p>
                    </div>
                   </div>
                )}

                {/* Development Journey (Bottom) */}
                {project.detailedDescription?.process && (
                  <div className="mb-10">
                     <h3 className="text-lg font-semibold mb-6">Development Journey</h3>
                     <div className="relative border-l border-border/50 ml-3 space-y-8">
                        {project.detailedDescription.process.map((step, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <h4 className="text-base font-medium mb-1">{step.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                     </div>
                  </div>
                )}

                {/* Tech Stack (Bottom) */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all"
                        >
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Actions - FIXED */}
            <div className="p-6 border-t border-border bg-background/80 backdrop-blur-md sticky bottom-0 z-10 w-full">
              <div className="flex gap-4">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild size="lg" className="flex-1 font-semibold shadow-lg shadow-primary/20 h-12 text-base">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-5 h-5 mr-2" />
                      View Live Project
                    </a>
                  </Button>
                )}
                {project.repoGit && (
                  <Button asChild variant="outline" size="lg" className="flex-1 h-12 text-base bg-background hover:bg-muted/50">
                    <a href={project.repoGit} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-5 h-5 mr-2" />
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
