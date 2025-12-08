import type {Metadata, Viewport} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navigation from "@/components/home/navigation";
import Footer from "@/components/footer/Footer";
import React from "react"; // Import de votre composant Navigation

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteConfig = {
    title: "Wistant - Fullstack Developer",
  description: "Je suis Wistant, développeur fullstack freelance spécialisé dans la création d'applications web performantes avec TypeScript, Next.js et NestJS. Construisons quelque chose d'incroyable ensemble.",
    author: "Wistant (Kode)",
    url: "https://wistantkode.com",
  ogImage: "/og-image.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Wistant`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  keywords: [
    // --- English Keywords ---
    // Roles & Titles
    "Fullstack Developer", "Software Engineer", "Web Developer", "Backend Developer", "Frontend Developer", 
    "React Developer", "Next.js Developer", "Node.js Developer", "TypeScript Expert", "Freelance Developer",
    "Software Architect", "DevOps Engineer", "UI/UX Engineer", "Creative Developer",
    
    // Technologies - Core
    "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS", "Express", "HTML5", "CSS3",
    
    // Technologies - Styles & UI
    "Tailwind CSS", "Framer Motion", "Three.js", "React Three Fiber", "Shadcn UI", "Radix UI", "GSAP",
    
    // Technologies - Backend & Data
    "PostgreSQL", "MongoDB", "Prisma", "TypeORM", "GraphQL", "REST API", "Docker", "Kubernetes", "AWS", "Vercel",
    
    // Concepts & Skills
    "Web Development", "App Development", "SaaS Development", "API Design", "Database Architecture",
    "Performance Optimization", "SEO Optimization", "Responsive Design", "Accessible Web Design",
    "Clean Code", "Agile Methodology", "CI/CD", "Git", "Testing", "Cybersecurity",
    
    // Locations & Attributes
    "Freelance", "Remote", "Available for hire", "Open Source Contributor", "Portfolio",
    
    // --- Mots-clés Français ---
    // Rôles & Titres
    "Développeur Fullstack", "Ingénieur Logiciel", "Développeur Web", "Développeur Backend", "Développeur Frontend",
    "Développeur React", "Développeur Next.js", "Développeur Node.js", "Expert TypeScript", "Développeur Freelance",
    "Architecte Logiciel", "Ingénieur DevOps", "Ingénieur UI/UX", "Développeur Créatif",
    
    // Technologies & Compétences
    "Développement Web", "Création de sites web", "Développement d'applications", "Conception API",
    "Optimisation de performance", "Référencement SEO", "Design Responsif", "Accessibilité Web",
    "Code Propre", "Méthodologie Agile", "Intégration Continue", "Déploiement Continu",
    
    // Localisation & Attributs
    "Freelance France", "Développeur Indépendant", "Disponible pour mission", "Contributeur Open Source",
    "Portfolio Développeur", "Création de SaaS", "Refonte de site web",
    
    // Specifics
    "Wistant", "Wistant Kode", "Kali", "Wistant Portfolio"
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Wistant Kode Portfolio",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Wistant Kode - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@wistantkode", // Placeholder, update if known
    site: "@wistantkode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  verification: {
    google: "N9STXKZhKO7NZofAlprylu4REI9ihRKNw84QvqUASEc",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <title></title>
      </head>
      <body className={`${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
            <Navigation/>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
