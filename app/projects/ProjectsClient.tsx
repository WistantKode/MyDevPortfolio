"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCategory } from "@/lib/projet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Code, Globe, Server, Smartphone, X } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { IconType } from "react-icons";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ProjectStats } from "@/components/projects/ProjectStats";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Project } from "@/lib/projet";
import GridBackground from "@/components/ui/GridBackground";

const filterConfig: { name: string; category: ProjectCategory; icon: IconType }[] = [
  { name: "Tous", category: "all", icon: Code },
  { name: "Web", category: "web", icon: Globe },
  { name: "Backend", category: "backend", icon: Server },
  { name: "Mobile", category: "mobile", icon: Smartphone },
];

const PROJECTS_PER_PAGE = 9;

export default function ProjectsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Calculate stats
  const totalTechnologies = useMemo(() => {
    const uniqueTechs = new Set(
      projectsData.flatMap((project) => project.tech.map((t) => t.name))
    );
    return uniqueTechs.size;
  }, []);

  const totalCategories = projectCategories.filter((cat) => cat !== "all").length;

  const filteredAndSortedProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "all" || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        // Featured projects first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredAndSortedProjects.length / PROJECTS_PER_PAGE);
  const currentProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== "" || selectedCategory !== "all";

  return (
    <>
      <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
        {/* Grid Background - Prominent variant for visual depth */}
        <GridBackground variant="prominent" withFade={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-text-primary">Mes </span>
              <span className="gradient-text">Projets</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Explorez une sélection de mes travaux, allant des applications web
              interactives aux systèmes backend robustes, conçus avec un accent sur la
              performance, la sécurité et la scalabilité.
            </motion.p>

            {/* Project Stats */}
            <ProjectStats
              totalProjects={projectsData.length}
              totalTechnologies={totalTechnologies}
              totalCategories={totalCategories}
            />
          </div>

          {/* Filters Section */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-2xl mx-auto w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
                <Input
                  placeholder="Rechercher par titre, description ou technologie..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-12 pr-4 h-12 bg-input border-border-light text-base focus:border-primary transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {filterConfig.map(({ name, category, icon: Icon }) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="default"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`group/filter transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-gradient-primary border-0 shadow-primary"
                        : "border-border-light hover:border-primary/50"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2 transition-transform group-hover/filter:scale-110" />
                    {name}
                  </Button>
                ))}
                
                {/* Clear Filters Button */}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-text-muted hover:text-primary"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Réinitialiser
                  </Button>
                )}
              </div>

              {/* Active Filters Display */}
              {(searchTerm || selectedCategory !== "all") && (
                <div className="flex flex-wrap items-center gap-2 justify-center">
                  {searchTerm && (
                    <Badge variant="secondary" className="text-sm">
                      Recherche: {searchTerm}
                    </Badge>
                  )}
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="text-sm">
                      Catégorie: {filterConfig.find((f) => f.category === selectedCategory)?.name}
                    </Badge>
                  )}
                  <span className="text-text-muted text-sm">
                    ({filteredAndSortedProjects.length} projet
                    {filteredAndSortedProjects.length > 1 ? "s" : ""})
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={setSelectedProject}
                  onImageClick={setLightboxImage}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-text-muted text-lg mb-2">
                Aucun projet ne correspond à vos critères.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                className="mt-4 border-border-light hover:border-primary"
              >
                Réinitialiser les filtres
              </Button>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-border-light hover:border-primary disabled:opacity-50"
              >
                Précédent
              </Button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={i + 1 === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                    className={
                      i + 1 === currentPage
                        ? "bg-gradient-primary border-0"
                        : "border-border-light hover:border-primary"
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="border-border-light hover:border-primary disabled:opacity-50"
              >
                Suivant
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage}
          alt="Project Screenshot"
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

// Helper import that was missing
import { projectCategories } from "@/lib/projet";
