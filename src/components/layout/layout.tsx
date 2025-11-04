import { ReactNode, useEffect } from "react";
import Navigation from "@/components/ui/navigation";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ 
  children, 
  title = "Modjo victor- Développeur Web Java React & Backend specialist",
  description = "Portfolio de Modjo victor, développeur backend,développeur web, mobile, desktop spécialisé dans la création de solutions digitales innovantes et performantes.",
  keywords = "développeur web, dévellopeur backend, Java, React, développement web, portfolio, Modjo Victor, solutions digitales"
}: LayoutProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description, keywords]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;