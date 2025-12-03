"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Ajoute la classe 'dark' ou 'light' à la balise html
      defaultTheme="system" // Thème sombre par défaut
      enableSystem // Permet à next-themes de détecter le thème système
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
