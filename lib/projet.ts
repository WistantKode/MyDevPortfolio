import { IconType } from "react-icons";

export const projectCategories = ["all", "web", "backend", "mobile"] as const;
export type ProjectCategory = typeof projectCategories[number];

export interface Tech {
  name: string;
  icon: IconType; // Uses IconType directly
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  repoGit?: string; // Renamed for clarity and consistency
  liveUrl?: string;
  tech: Tech[];
  imageUrl?: string;
  
  // New enriched fields for advanced UI
  status?: 'live' | 'in-progress' | 'archived';
  featured?: boolean; // Featured projects get larger cards
  completionDate?: string;
  clientType?: 'personal' | 'professional' | 'open-source';
  metrics?: {
    githubStars?: number;
    contributors?: number;
  };
  gallery?: string[]; // Array of images for modal gallery
  detailedDescription?: {
    overview?: string;
    features?: string[];
    challenges?: string;
  };
}
