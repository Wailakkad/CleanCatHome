import React, { useEffect, useRef } from 'react';

export interface NativeAdProps {
  className?: string;
}

export const NativeAd: React.FC<NativeAdProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    container.innerHTML = '';

    const invokeScript = document.createElement('script');
    invokeScript.async = true;
    invokeScript.setAttribute('data-cfasync', 'false');
    invokeScript.src = 'https://pl31401917.profitableratecpmnetwork.com/701132d8b994986704188be40709a837/invoke.js';
    container.appendChild(invokeScript);

    const adDiv = document.createElement('div');
    adDiv.id = 'container-701132d8b994986704188be40709a837';
    container.appendChild(adDiv);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Native advertisement"
      className={`w-full flex justify-center my-8 ${className}`}
    />
  );
};
