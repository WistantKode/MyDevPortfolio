import {IconType} from "react-icons";

/**
 * @description Définit les catégories valides pour un projet.
 *              Utilisé pour le filtrage sur la page des projets.
 */
export const projectCategories = ["all", "web", "backend", "mobile"] as const;

/**
 * @description Type représentant une catégorie de projet.
 *              Dérivé des valeurs de `projectCategories`.
 */
export type ProjectCategory = typeof projectCategories[number];

/**
 * @description Représente une technologie (langage, framework, etc.) utilisée dans un projet.
 */
export interface Tech {
    /** Nom de la technologie (ex: "React"). */
  name: string;
    /** Composant d'icône associé à la technologie. */
    icon: IconType;
}

/**
 * @interface Project
 * @description Représente la structure de données complète pour un projet du portfolio.
 *              Contient toutes les informations nécessaires pour l'affichage sur la page des projets
 *              et dans la modale détaillée.
 */
export interface Project {
    /** Identifiant unique du projet (ex: "proj-shopdo"). */
  id: string;
    /** Titre principal du projet. */
  title: string;
    /** Description courte utilisée pour les cartes de projet. */
  description: string;
    /** Catégorie principale du projet. @see ProjectCategory */
  category: ProjectCategory;
    /** URL du dépôt Git (optionnel). */
    repoGit?: string;
    /** URL de la version live du projet (optionnel). */
  liveUrl?: string;
    /** URL vers un document de spécifications ou autre (optionnel). */
    docsUrl?: string;
    /** Liste des technologies utilisées. */
  tech: Tech[];
    /** URL de l'image principale de présentation du projet. */
  imageUrl?: string;

    // --- Champs enrichis pour une UI avancée ---

    /** Statut actuel du projet. */
  status?: 'live' | 'in-progress' | 'archived';
    /** Si `true`, le projet est mis en avant (ex: carte plus grande). */
    featured?: boolean;
    /** Date d'achèvement ou année du projet. */
  completionDate?: string;
    /** Type de client ou de projet. */
  clientType?: 'personal' | 'professional' | 'open-source';

    // --- Données pour l'étude de cas (modale) ---

    /** Mon rôle sur le projet (ex: "Développeur Full Stack"). */
    role?: string;
    /** Durée approximative du projet (ex: "3 mois"). */
    timeline?: string;
    /** Composition de l'équipe (ex: "Projet Solo" ou "Équipe de 3"). */
    team?: string;

    /** Métriques quantifiables du projet (optionnel). */
  metrics?: {
    githubStars?: number;
    contributors?: number;
    downloads?: number;
    views?: number;
  };

    /** Liste d'URLs d'images pour la galerie de la modale. */
    gallery?: string[];

    /** Description détaillée pour la modale de l'étude de cas. */
  detailedDescription?: {
        /** Vue d'ensemble détaillée du projet. */
    overview?: string;
        /** Liste des fonctionnalités clés. */
    features?: string[];
        /** Description des défis rencontrés et des solutions apportées. */
    challenges?: string;
        /** Étapes du processus de développement. */
        process?: { title: string; description: string }[];
        /** Principaux enseignements tirés du projet. */
        keyTakeaways?: string[];
  };

    /** Témoignages clients associés au projet (optionnel). */
  testimonials?: {
    name: string;
    role: string;
    content: string;
    avatar?: string;
  }[];
}
