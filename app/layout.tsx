import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Wistant — Fullstack Developer (TypeScript • Next.js • NestJS • React)",
  description: "Wistant — Fullstack developer building production-grade apps with TypeScript, Next.js (frontend), NestJS (backend) and React. Portfolio, projects, and engineering notes.",
  authors: [{ name: "Wistant (Kali)" }],
  keywords: ["Wistant", "Kali", "Fullstack Developer", "TypeScript", "Next.js", "NestJS", "React", "portfolio", "backend", "frontend", "web developer"],
  
  // Open Graph
  openGraph: {
    title: "Wistant — Fullstack Developer (TypeScript • Next.js • NestJS • React)",
    description: "Portfolio of Wistant (Kali). I build fast, maintainable web apps using TypeScript, Next.js, NestJS and React.",
    type: "website",
    images: ["/photo-pro-vert.png"],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Wistant — Fullstack Developer (TypeScript • Next.js • NestJS • React)",
    description: "Portfolio of Wistant (Kali) — building fast, resilient web apps with TypeScript, Next.js, NestJS and React.",
    images: ["/photo-pro-vert.png"],
  },
  
  // Icons
  icons: {
    icon: "/lg.ico",
    shortcut: "/lg.ico",
  },
  
  // Verification
  verification: {
    google: "N9STXKZhKO7NZofAlprylu4REI9ihRKNw84QvqUASEc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
