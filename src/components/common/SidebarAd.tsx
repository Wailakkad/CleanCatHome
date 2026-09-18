import React, { useEffect, useRef } from 'react';

export interface SidebarAdProps {
  className?: string;
}

export const SidebarAd: React.FC<SidebarAdProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    container.innerHTML = '';

    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '37ba92d70b93e6e5ba1c9c684f32f21a',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    container.appendChild(optionsScript);

    const invokeScript = document.createElement('script');
    invokeScript.src = 'https://www.highrevenueformat.com/37ba92d70b93e6e5ba1c9c684f32f21a/invoke.js';
    invokeScript.async = true;
    container.appendChild(invokeScript);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Sidebar advertisement"
      className={`w-full flex justify-center ${className}`}
    />
  );
};
