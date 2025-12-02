import {Project} from "./projet";
import {FaReact} from "react-icons/fa";
import {SiCss3, SiFramework, SiHtml5, SiJavascript, SiNestjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiRemixiconFill} from "react-icons/ri";

const PROJECT_IMAGE_BASE_PATH = "/projects img/";

export const projectsData: Project[] = [
    {
        id: "proj-shopdo",
        title: "ShopDO - E-commerce Platform Backend",
        description: "Developed a robust and scalable backend for an e-commerce platform, focusing on secure API design and efficient data management. Implemented core functionalities for product catalog, user authentication, and order processing.",
        category: "backend",
        tech: [
            {name: "React", icon: FaReact},
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Next.js", icon: RiNextjsFill},
        ],
        repoGit: "https://github.com/WistantKode/nextjs-15-fullstack-e-commerce-web-app",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}shopdo.png`,
        status: "in-progress",
        featured: true,
        completionDate: "2024",
        clientType: "personal",
        role: "Lead Full Stack Developer",
        timeline: "4 mois",
        team: "Projet Solo",
        detailedDescription: {
            overview: "ShopDO est une plateforme e-commerce complète conçue pour démontrer la puissance de l'architecture Next.js 15 App Router. L'objectif était de créer une expérience d'achat fluide, rapide et sécurisée, rivalisant avec les standards de l'industrie.",
            features: [
                "Authentification sécurisée (JWT + NextAuth)",
                "Catalogue produits avec filtres dynamiques",
                "Panier d'achat persistant (Local Storage + DB)",
                "Dashboard administrateur complet",
                "Paiement intégré (Stripe)",
                "Optimisation SEO et Performance (Core Web Vitals)"
            ],
            challenges: "La gestion de l'état global entre les composants serveur (RSC) et client a été le défi principal. L'implémentation d'un panier synchronisé en temps réel tout en maintenant le rendu côté serveur pour le SEO a nécessité une architecture hybride soignée.",
            process: [
                { title: "Planification & Design", description: "Création des maquettes Figma et définition du schéma de base de données PostgreSQL." },
                { title: "Développement Backend", description: "Mise en place de l'API avec Next.js API Routes et Prisma ORM." },
                { title: "Frontend & UI", description: "Intégration des composants avec Tailwind CSS et Framer Motion pour les interactions." },
                { title: "Optimisation", description: "Audit Lighthouse et mise en place du caching pour réduire le TTFB." }
            ],
            keyTakeaways: [
                "Maîtrise approfondie des Server Actions de Next.js 15",
                "Importance de la validation des données avec Zod à tous les niveaux",
                "Gestion complexe des formulaires avec React Hook Form"
            ]
        }
    },
    {
        id: "proj-nestjs-auth",
        title: "NESTJS AUTH JWT - Secure Authentication Microservice",
        description: "Engineered a secure and efficient authentication microservice using NestJS, implementing JWT (JSON Web Tokens) for robust user authorization. Designed for seamless integration into larger application architectures.",
        category: "backend",
        tech: [
            {name: "NestJS", icon: SiNestjs},
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/nestjs-nextjs-authentication-side",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}nestjs-auth.png`,
        status: "live",
        completionDate: "2024",
        clientType: "open-source",
        detailedDescription: {
            overview: "Microservice d'authentification sécurisé utilisant NestJS et JWT, conçu pour une intégration facile dans des architectures modernes.",
            features: [
                "Authentification JWT avec refresh tokens",
                "Sécurité renforcée avec bcrypt",
                "Guards et decorators personnalisés",
                "Documentation API Swagger",
                "Architecture modulaire et scalable"
            ]
        }
    },
    {
        id: "proj-plantex",
        title: "Plantex - Modern Plant Showcase Website",
        description: "Developed a visually appealing showcase website for plants, designed to be fully responsive and easily customizable. Includes sections for products, FAQs, contact information, and social links, featuring a minimalist design with Google Fonts (Outfit) and Remix Icons.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/responsivewebsite-plantex",
        liveUrl: "https://plantex-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}plantex.png`,
    },
    {
        id: "proj-car-rental",
        title: "Car Rental - Responsive Web Application",
        description: "Engineered a responsive car rental website using HTML, CSS, and JavaScript. The platform features a clean user interface, dynamic content rendering, and a seamless booking experience. Optimized for performance and cross-browser compatibility.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/javascript-html-css-car-rental-website",
        liveUrl: "https://javascript-html-css-car-rental-webs.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}car-rental.png`,
        status: "live",
        clientType: "personal",
    },
    {
        id: "proj-chickfood-v2",
        title: "Chick Food - Responsive Restaurant Frontend (V2)",
        description: "An enhanced responsive frontend for a fictional fried chicken restaurant, delivering an engaging user experience with smooth animations and a clean, modern design. A robust portfolio piece demonstrating advanced HTML, CSS, and JavaScript skills.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-chickfood",
        liveUrl: "https://chickfood-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}chickfood.png`,
    },
    {
        id: "proj-structo",
        title: "Structo - Modern Construction Landing Page",
        description: "Developed a fully responsive and easily customizable landing page for a construction company. Features sections for services, projects, testimonials, and contact information, utilizing modern design principles, Google Fonts (Outfit), and Remixicon for enhanced aesthetics.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
            {name: "ScrollJS", icon: SiFramework},
            {name: "RemixIcon", icon: RiRemixiconFill},
        ],
        repoGit: "https://github.com/WistantKode/responsive-construction-company-website",
        liveUrl: "https://construction-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}structo.png`,
    },
    {
        id: "proj-elysian-drive",
        title: "Elysian Drive - Electric Car Brand Landing Page",
        description: "Crafted a captivating frontend landing page for an electric car brand, showcasing futuristic design and immersive animations. Demonstrates advanced skills in HTML, CSS, and JavaScript, with a focus on interactive and visually rich user experiences.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/responsive-car-website",
        liveUrl: "https://elsyandrive-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}elysindrive.png`,
    },
    {
        id: "proj-boomsound",
        title: "Boomsound - Artist & DJ Showcase Website",
        description: "Designed and developed a dynamic showcase website for artists, DJs, and creatives, enabling them to establish a strong web presence. Built with HTML, CSS, and JavaScript for a vibrant and engaging user experience.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-boomsound",
        liveUrl: "https://wistant-html-css-js-headphones-website.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}boomsound.png`,
    },
    {
        id: "proj-portfolio",
        title: "Personal Portfolio - React & Tailwind CSS",
        description: "Meticulously crafted my personal portfolio using React and Tailwind CSS. This platform effectively showcases my diverse projects, technical skills, and professional journey through a modern, responsive, and highly optimized design.",
        category: "web",
        tech: [
            {name: "React", icon: FaReact},
            {name: "TypeScript", icon: SiTypescript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio.git",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}portfolio-img.png`,
        status: "in-progress",
        clientType: "personal",
    },
];
