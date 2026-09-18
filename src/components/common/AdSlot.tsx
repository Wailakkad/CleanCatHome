import React from 'react';

export interface AdSlotProps {
  position: 'top' | 'in-content' | 'sidebar' | 'bottom';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ position, className = '' }) => {
  // In production with an active ad network, insert the actual ad provider tag here.
  // Example: <div id={`ad-slot-${position}`} className="ad-container" />
  // Currently renders an unobtrusive editorial placeholder.

  const heightClasses = {
    top: 'min-h-[90px] max-h-[100px]',
    'in-content': 'min-h-[140px] max-h-[180px]',
    sidebar: 'min-h-[250px] max-h-[300px]',
    bottom: 'min-h-[120px] max-h-[160px]',
  }[position];

  return (
    <aside
      aria-label={`Advertisement Slot - ${position}`}
      className={`w-full ${heightClasses} my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-[#E3DDD2] bg-[#FAF8F5]/80 p-4 text-center transition-opacity ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A89E90]">
        Advertisement
      </span>
      <p className="mt-1 text-xs text-[#8A8276] font-serif italic">
        {position === 'in-content' && 'Support Clean Cat Home with thoughtful partner placements'}
        {position === 'sidebar' && 'Curated Cat Home Recommendations'}
        {position === 'top' && 'Clean Cat Home Editorial Partner'}
        {position === 'bottom' && 'Clean Cat Home Partner Network'}
      </p>
    </aside>
  );
};
