import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: "Projets - Wistant Kode | Praticien DevSecOps & Ingénieur Logiciel",
  description: "Explorez une sélection de projets de Wistant Kode, démontrant une expertise en développement web, systèmes backend et solutions logicielles robustes. Spécialisé en Java/Spring Boot, React/Next.js, Cloud, Automatisation et Cybersécurité.",
  keywords: ["Wistant Kode", "projets", "développement web", "développement backend", "Java", "React", "Next.js", "Spring Boot", "Cloud", "Automatisation", "Cybersécurité", "portfolio", "ingénierie logicielle", "DevSecOps"],
};

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;
