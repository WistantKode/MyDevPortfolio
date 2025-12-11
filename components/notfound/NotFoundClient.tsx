"use client";

import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";

const NotFoundClient = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 blur-3xl rounded-full animate-float delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 p-8 bg-gradient-card border border-border-light rounded-xl shadow-card max-w-lg mx-auto"
      >
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-8xl md:text-9xl font-extrabold text-primary mb-4"
        >
          Erreur 404
        </motion.h1>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Ressource non trouvée
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          L'URL demandée n'existe pas ou a été déplacée. Veuillez vérifier l'adresse ou revenir à une section valide du portfolio.
        </p>
          <Link href="/public">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth group">
            Retour à l'accueil
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFoundClient;
