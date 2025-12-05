import React from 'react';

interface GridBackgroundProps {
  /** Variant determines opacity and visual style */
  variant?: 'default' | 'subtle' | 'prominent';
  /** Add fade overlays at top/bottom for smooth transitions */
  withFade?: boolean;
  /** Custom className for additional styling */
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  variant = 'default',
  withFade = true,
  className = '',
}) => {
  // Opacity mapping for variants
  const opacityMap = {
    subtle: 'opacity-30',
    default: 'opacity-50',
   prominent: 'opacity-70',
  };

  const opacity = opacityMap[variant];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] ${opacity}`}
      />
      
      {/* Fade Overlays */}
      {withFade && (
        <>
          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10" />
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        </>
      )}
    </div>
  );
};

export default GridBackground;
