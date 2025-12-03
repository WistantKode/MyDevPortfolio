import {Code, Database, Globe, Monitor, Smartphone} from "lucide-react";

export const services = [
    {
        icon: Database,
        title: "Systèmes Backend & APIs",
        description: "Implémentation de systèmes robustes et scalables avec NestJS et des architectures microservices résilientes.",
        features: [
            "APIs REST/GraphQL sécurisées",
            "Authentification & Gestion des utilisateurs (JWT, OAuth)",
            "Déploiement de microservices",
            "Architecture système scalable",
        ],
        price: "Solutions sur mesure adaptées aux besoins de l'entreprise",
    },
    {
        icon: Code,
        title: "Développement Web Full-Stack",
        description: "Création d'applications web modernes et performantes avec des technologies de pointe.",
        features: [
            "Plateformes web responsives",
            "Progressive Web Apps (PWAs)",
            "Solutions E-commerce",
            "Intégration & orchestration d'APIs",
            "Tableaux de bord administratifs",
        ],
        price: "Tarification adaptée à la portée – Devis gratuit fourni",
    },
    {
        icon: Smartphone,
        title: "Applications Mobiles Multiplateformes",
        description: "Développement d'applications mobiles multiplateformes offrant une expérience quasi-native avec React Native.",
        features: [
            "Développement d'applications iOS/Android",
            "Interface optimisée quasi-native",
            "Optimisation des performances et des ressources",
        ],
        price: "Tarification adaptée à la portée",
    },
    {
        icon: Globe,
        title: "Optimisation & Performance",
        description: "Amélioration de la performance, de la stabilité et du classement des sites web dans les moteurs de recherche.",
        features: [
            "Optimisation SEO technique",
            "Métriques de performance web (Core Web Vitals)",
            "Implémentation & reporting d'analytics",
            "Maintenance & surveillance continues",
        ],
        price: "",
    },
    {
        icon: Monitor,
        title: "Applications de Bureau sur Mesure",
        description: "Développement de solutions logicielles de bureau sur mesure avec JavaFX et une intégration de base de données robuste.",
        features: [
            "Interfaces modernes et intuitives",
            "Connectivité de base de données sécurisée",
            "Fonctionnalités de gestion de données et de reporting",
            "Solutions conçues pour les PME",
        ],
        price: "Chaque projet est chiffré en fonction de sa complexité technique",
    },
];

export const processSteps = [
    {
        step: "01",
        title: "Consultation & Cadrage",
        description: "Définition des besoins et des objectifs du projet pour établir une feuille de route claire."
    },
    {
        step: "02",
        title: "Architecture & Conception",
        description: "Création des plans, des wireframes et planification de l'architecture technique du système."
    },
    {
        step: "03",
        title: "Développement & Tests",
        description: "Implémentation du système avec un codage structuré et des points de validation réguliers."
    },
    {
        step: "04",
        title: "Déploiement & Support",
        description: "Déploiement final, formation nécessaire et support de maintenance post-lancement."
    },
];
