import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Terms of Service | Clean Cat Home"
        description="Terms and conditions for using Clean Cat Home website and content."
        canonical={`${siteConfig.url}/terms`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="my-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Legal Agreements
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252422]">
            Terms of Service
          </h1>
          <p className="text-xs text-[#706B63]">Last updated: September 16, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none text-[#332F2A] leading-relaxed space-y-5 text-sm sm:text-base">
          <p>
            By accessing and using <strong>Clean Cat Home</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">1. Intellectual Property</h2>
          <p>
            All original articles, photography, vector illustrations, schematics, and editorial layouts published on this site are the property of Clean Cat Home and protected by applicable copyright and trademark law. You may not republish, sell, rent, or sub-license material without explicit written consent.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">2. Content Purpose & Accuracy</h2>
          <p>
            All information provided on Clean Cat Home is published in good faith for general information, home hygiene, and aesthetic organization purposes only. Clean Cat Home makes no warranties about the absolute completeness or reliability of external products mentioned. Any action you take upon the information you find on this website is strictly at your own risk.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">3. Third-Party Links</h2>
          <p>
            Our website may contain links to external third-party websites or services that are not owned or controlled by Clean Cat Home. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
          </p>
        </div>
      </div>
    </div>
  );
};
