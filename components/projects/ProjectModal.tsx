"use client";

import { Project } from "@/lib/projet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code2, ExternalLink, X, CheckCircle2, Clock, Users, Briefcase, ArrowRight } from "lucide-react";
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] p-0 gap-0 overflow-hidden bg-background border-border shadow-2xl sm:rounded-xl">
        <div className="grid lg:grid-cols-12 h-full max-h-[95vh]">
          {/* LEFT: Image & Quick Info (5 cols) */}
          <div className="lg:col-span-5 relative bg-muted/30 h-64 lg:h-full flex flex-col border-r border-border">
            {/* Main Image */}
            <div className="relative flex-1 min-h-[250px] lg:min-h-0">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <span className="text-4xl">📦</span>
                </div>
              )}
              {/* Overlay Gradient for text readability if needed, but keeping it clean for now */}
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Back button for mobile */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex lg:hidden items-center justify-center border border-border shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats / Metadata Section (Desktop only, moves to body on mobile) */}
            <div className="hidden lg:flex flex-col p-6 gap-6 bg-card border-t border-border">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Project Details
                </h3>
                <div className="space-y-4">
                  {project.role && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Role</div>
                        <div className="font-medium text-sm">{project.role}</div>
                      </div>
                    </div>
                  )}
                  {project.timeline && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                        <div className="font-medium text-sm">{project.timeline}</div>
                      </div>
                    </div>
                  )}
                  {project.team && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Team</div>
                        <div className="font-medium text-sm">{project.team}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border/50 text-xs font-medium"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Scrollable (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full bg-background overflow-hidden relative">
            {/* Desktop Close Button */}
            <div className="absolute top-0 right-0 p-4 z-10 hidden lg:block bg-gradient-to-b from-background to-transparent w-full">
              <button
                onClick={onClose}
                className="float-right w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
              {/* Header */}
              <div className="mb-8 mt-2 lg:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  {project.clientType && (
                    <Badge variant="secondary" className="rounded-full px-3 font-normal">
                      {project.clientType}
                    </Badge>
                  )}
                  {project.status && (
                    <Badge variant="outline" className="rounded-full px-3 font-normal capitalize">
                      {project.status.replace('-', ' ')}
                    </Badge>
                  )}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.detailedDescription?.overview || project.description}
                </p>
              </div>

              <div className="space-y-10">
                {/* Mobile Details (Visible only on mobile) */}
                <div className="lg:hidden grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                  {project.role && (
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Role</div>
                      <div className="font-medium text-sm">{project.role}</div>
                    </div>
                  )}
                  {project.timeline && (
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                      <div className="font-medium text-sm">{project.timeline}</div>
                    </div>
                  )}
                </div>

                {/* Key Features */}
                {project.detailedDescription?.features && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.detailedDescription.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Development Process */}
                {project.detailedDescription?.process && (
                  <section>
                    <h3 className="text-xl font-semibold mb-6">Development Process</h3>
                    <div className="relative border-l-2 border-border ml-3 space-y-8 pb-2">
                      {project.detailedDescription.process.map((step, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Challenges & Solutions */}
                {project.detailedDescription?.challenges && (
                  <section className="bg-muted/30 p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.detailedDescription.challenges}
                    </p>
                  </section>
                )}

                {/* Key Takeaways */}
                {project.detailedDescription?.keyTakeaways && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {project.detailedDescription.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border bg-background/80 backdrop-blur-sm sticky bottom-0">
              <div className="flex flex-col sm:flex-row gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild size="lg" className="flex-1 font-semibold">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Live Project
                    </a>
                  </Button>
                )}
                {project.repoGit && (
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <a href={project.repoGit} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4 mr-2" />
                      View Source Code
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
