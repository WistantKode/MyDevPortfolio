import React from 'react';

/**
 * @interface GridBackgroundProps
 * @description Définit les props pour le composant GridBackground.
 */
interface GridBackgroundProps {
    /**
     * @description Détermine l'opacité et le style visuel de la grille.
     * @default 'default'
     */
  variant?: 'default' | 'subtle' | 'prominent';
    /**
     * @description Si `true`, ajoute des superpositions de dégradé en haut et en bas pour des transitions douces.
     * @default true
     */
  withFade?: boolean;
    /**
     * @description Permet d'ajouter des classes CSS personnalisées pour un style supplémentaire.
     */
  className?: string;
}

/**
 * @component GridBackground
 * @description Un composant réutilisable pour afficher un arrière-plan en grille avec des variantes et des effets de dégradé optionnels.
 *              Il est conçu pour être utilisé en position absolue à l'intérieur d'un conteneur parent.
 *
 * @param {GridBackgroundProps} props - Les propriétés pour configurer le composant.
 * @returns {React.ReactElement} Le composant d'arrière-plan en grille.
 */
const GridBackground: React.FC<GridBackgroundProps> = ({
  variant = 'default',
  withFade = true,
  className = '',
}) => {
    // Mappage des variantes d'opacité
  const opacityMap = {
    subtle: 'opacity-30',
    default: 'opacity-50',
      prominent: 'opacity-70',
  };

  const opacity = opacityMap[variant];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Motif de la grille */}
      <div 
        className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] ${opacity}`}
      />

        {/* Superpositions de dégradé */}
      {withFade && (
        <>
            {/* Dégradé supérieur */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10" />

            {/* Dégradé inférieur */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        </>
      )}
    </div>
  );
};

export default GridBackground;
