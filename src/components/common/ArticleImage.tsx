import React, { useState } from 'react';

export interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  aspectRatio?: '16:10' | '16:9' | '3:2' | '4:3' | '2:3' | '1:1';
  className?: string;
  category?: string;
  title?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  alt,
  caption,
  width,
  height,
  loading,
  priority = false,
  aspectRatio,
  className = '',
  category = 'Editorial Guide',
  title = '',
}) => {
  const [hasError, setHasError] = useState(false);

  // Eager loading & fetchpriority for hero/cover images
  const effectiveLoading = priority ? 'eager' : loading || 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  // Determine default aspect ratio: cover defaults to 16:10, others to 3:2 if not specified
  const effectiveAspect = aspectRatio || (priority ? '16:10' : '3:2');

  const aspectClass = {
    '16:10': 'aspect-[16/10]',
    '16:9': 'aspect-[16/9]',
    '3:2': 'aspect-[3/2]',
    '4:3': 'aspect-[4/3]',
    '2:3': 'aspect-[2/3]',
    '1:1': 'aspect-square',
  }[effectiveAspect] || 'aspect-[3/2]';

  return (
    <figure className={`my-6 overflow-hidden rounded-2xl ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-[#E8E2D8] bg-[#F4EFEA] ${aspectClass}`}
        style={width && height ? { maxWidth: '100%' } : undefined}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={effectiveLoading}
            // @ts-ignore fetchPriority is a valid standard DOM attribute in modern browsers and React 18.3+
            fetchPriority={fetchPriority}
            decoding={priority ? 'sync' : 'async'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
          />
        ) : (
          <div
            className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F2] via-[#F4EFEA] to-[#EAE3D8] text-[#252422]"
            role="img"
            aria-label={alt}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8F6D48] border border-[#E5DDD0] shadow-2xs">
                {category}
              </span>
              <span className="text-xs font-serif italic text-[#8A8276]">
                Clean Cat Home • Editorial
              </span>
            </div>

            <div className="space-y-2 max-w-lg">
              <h4 className="font-serif text-lg sm:text-2xl font-semibold text-[#252422] leading-snug">
                {title || alt}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5852] line-clamp-2">
                {alt}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#706B63] border-t border-[#E5DDD0]/60 pt-3">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#5A705E]"></span>
                Visual Guide Illustration
              </span>
              <span className="font-mono text-[10px] text-[#9E9588]">
                {effectiveAspect.replace(':', ' × ')}
              </span>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 px-1 text-xs text-[#706B63] leading-relaxed font-serif italic flex items-baseline gap-1.5">
          <span className="text-[#8F6D48] font-sans font-semibold not-italic text-[10px] uppercase tracking-wider">
            Note:
          </span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
