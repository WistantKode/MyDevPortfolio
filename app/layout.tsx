import type {Metadata, Viewport} from "next";
// import {Outfit} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navigation from "@/components/home/navigation";
import React from "react"; // Import de votre composant Navigation

// const outfit = Outfit({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-outfit",
// });

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
  keywords: [
    "Développeur Fullstack", "Développeur Freelance", "Développeur Web", "TypeScript", "Next.js", "NestJS", "React", "Node.js",
    "Développement d'applications web", "Développement d'API", "Développeur Backend", "Développeur Frontend", "Portfolio", "Wistant", "Kali",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@votre_handle_twitter",
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
  },
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
      <body className={`font-sans antialiased`}>
        <Providers>
            <Navigation/>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
