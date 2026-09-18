import React, { useEffect } from 'react';
import { siteConfig } from '../../data/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  articleDate?: string;
  articleAuthor?: string;
  structuredData?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  articleDate,
  articleAuthor,
  structuredData,
}) => {
  const fullTitle = title 
    ? (title.includes('Clean Cat Home') ? title : `${title} | Clean Cat Home`)
    : `${siteConfig.name} | Cat Care, Cleaning & Home Ideas`;

  const metaDesc = description || siteConfig.shortDescription;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteConfig.url);
  const socialImage = image 
    ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`)
    : `${siteConfig.url}/images/blog/cat-urine-smell.svg`;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // 2. Standard Meta
    setMeta('name', 'description', metaDesc);

    // 3. OpenGraph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDesc);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', socialImage);
    setMeta('property', 'og:site_name', siteConfig.name);

    // 4. Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDesc);
    setMeta('name', 'twitter:image', socialImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD structured data
    let jsonLdScript = document.getElementById('seo-structured-data') as HTMLScriptElement | null;
    if (structuredData) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'seo-structured-data';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }
  }, [fullTitle, metaDesc, canonicalUrl, socialImage, type, articleDate, articleAuthor, structuredData]);

  return null;
};
