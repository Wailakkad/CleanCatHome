import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';
import { ProductHero } from '../components/product/ProductHero';
import { ProductProblemOutcome } from '../components/product/ProductProblemOutcome';
import { ProductFeatures } from '../components/product/ProductFeatures';
import { ProductAudience } from '../components/product/ProductAudience';
import { ProductHowItWorks } from '../components/product/ProductHowItWorks';
import { ProductSafety } from '../components/product/ProductSafety';
import { ProductPricing } from '../components/product/ProductPricing';
import { ProductFAQ } from '../components/product/ProductFAQ';
import { ProductFinalCta } from '../components/product/ProductFinalCta';

export const WinterCatShelterStarterKit: React.FC = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="DIY Winter Cat Shelter Starter Kit | Clean Cat Home"
        description="Beginner-friendly 30-page PDF guide with step-by-step plans, insulation tips, and printable checklists to help you build a warmer outdoor winter cat shelter."
        canonical={`${siteConfig.url}/winter-cat-shelter-starter-kit`}
        image="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/FIRST-Cat_sitting_near_outdoor_shelter_2K_20261022170930.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Winter Shelter Kit' }]} />
      </div>

      <ProductHero />
      <ProductProblemOutcome />
      <ProductFeatures />
      <ProductAudience />
      <ProductHowItWorks />
      <ProductSafety />
      <ProductPricing />
      <ProductFAQ />
      <ProductFinalCta />
    </main>
  );
};
