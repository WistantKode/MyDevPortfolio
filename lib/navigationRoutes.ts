import {BookOpen, Briefcase, Code, Home, LucideIcon, Mail} from "lucide-react";

/**
 * @interface NavItem
 * @description Représente un élément de navigation dans la barre de navigation principale.
 */
interface NavItem {
    /** Le chemin de l'URL pour le lien de navigation. */
    href: string;
    /** Le texte à afficher pour l'élément de navigation. */
    label: string;
    /** Le composant d'icône à afficher à côté du libellé. */
    icon: LucideIcon;
    /** Si `true`, l'élément est traité comme un appel à l'action (ex: bouton stylisé différemment). */
    isCta: boolean;
}

/**
 * @description Configure les éléments de la barre de navigation principale du site.
 *              Chaque objet définit un lien avec son chemin, son libellé, son icône
 *              et s'il s'agit d'un appel à l'action.
 */
export const navItems: NavItem[] = [
    {href: "/", label: "Home", icon: Home, isCta: false},
    {href: "/projects", label: "Projects", icon: Code, isCta: false},
    {href: "/services", label: "Services", icon: Briefcase, isCta: false},
    {href: "/blog", label: "Blog", icon: BookOpen, isCta: false},
    {href: "/contact", label: "Contact", icon: Mail, isCta: true}, // Marqué comme un appel à l'action
];
