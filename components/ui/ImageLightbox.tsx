import React from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";

/**
 * @interface ImageLightboxProps
 * @description Définit les props pour le composant ImageLightbox.
 */
interface ImageLightboxProps {
    /** L'URL de l'image à afficher. */
    src: string;
    /** Le texte alternatif pour l'image, pour l'accessibilité. */
    alt: string;
    /** Détermine si la lightbox est ouverte ou fermée. */
    isOpen: boolean;
    /** La fonction à appeler pour fermer la lightbox. */
    onClose: () => void;
}

/**
 * @component ImageLightbox
 * @description Un composant qui affiche une image dans une boîte de dialogue modale (lightbox).
 *              Il s'ouvre par-dessus le contenu de la page pour mettre l'image en évidence.
 *
 * @param {ImageLightboxProps} props - Les propriétés pour configurer la lightbox.
 * @returns {React.ReactElement} Le composant de la lightbox d'image.
 */
export const ImageLightbox: React.FC<ImageLightboxProps> = ({
                                                                src,
                                                                alt,
                                                                isOpen,
                                                                onClose,
                                                            }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-none">
                <img src={src} alt={alt} className="max-h-[90vh] w-auto mx-auto object-contain rounded-lg"/>
            </DialogContent>
        </Dialog>
    );
};
