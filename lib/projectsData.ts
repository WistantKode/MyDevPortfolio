/**
 * @file Ce fichier contient les données brutes de tous les projets du portfolio.
 * @description Chaque objet du tableau `projectsData` est une instance de l'interface `Project`.
 *              Ces données sont utilisées pour peupler dynamiquement la page des projets,
 *              les cartes de projet individuelles et les modales d'étude de cas.
 *              Pour modifier les informations d'un projet, c'est ici qu'il faut intervenir.
 *
 * @see /lib/projet.ts pour la définition de la structure `Project`.
 */

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
        timeline: "2 months",
        team: "Solo Project",
        docsUrl: "/docs/shopdo-specs.pdf", // Placeholder
        gallery: [
            `${PROJECT_IMAGE_BASE_PATH}shopdo.png`,
            `${PROJECT_IMAGE_BASE_PATH}nestjs-auth.png`, // Placeholder for demo
            `${PROJECT_IMAGE_BASE_PATH}car-rental.png`   // Placeholder for demo
        ],
        detailedDescription: {
            overview: "ShopDO is a complete e-commerce platform designed to demonstrate the power of the Next.js 15 App Router architecture. The goal was to create a seamless, fast, and secure shopping experience that rivals industry standards.",
            features: [
                "Secure authentication (NextAuth.js)",
                "Shopping Cart and Checkout (Stripe)",
                "Comprehensive Admin Dashboard",
                "Advanced Search and Filtering",
                "SEO & Performance Optimization"
            ],
            challenges: "Managing global state between server components (RSC) and client components was the main challenge. Implementing a real-time synchronized shopping cart while maintaining server-side rendering for SEO required a carefully designed hybrid architecture.",
            process: [
                {
                    title: "Frontend & UI",
                    description: "Integration of components with Tailwind CSS and Framer Motion for interactions."
                },
                {title: "Optimization", description: "Lighthouse audit and implementation of caching to reduce TTFB."}
            ],
            keyTakeaways: [
                "In-depth mastery of Next.js 15 Server Actions",
                "Importance of data validation with Zod at all levels",
                "Complex form management with React Hook Form"
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
            overview: "Secure authentication microservice using NestJS and JWT, designed for easy integration into modern architectures.",
            features: [
                "JWT authentication with refresh tokens",
                "Enhanced security with bcrypt",
                "Custom guards and decorators",
                "Swagger API documentation",
                "Modular and scalable architecture"
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
