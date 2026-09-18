import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { ArticleCard } from '../components/blog/ArticleCard';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { CategoryCard } from '../components/blog/CategoryCard';
import { NewsletterSection } from '../components/blog/NewsletterSection';
import { AdSlot } from '../components/common/AdSlot';
import { articles } from '../data/articles';
import { siteConfig } from '../data/site';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Wind,
  Brush,
  Footprints,
  Home,
  Scissors,
  Sun,
  Armchair,
  Search,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // Featured top article (Article 1 or 2)
  const featuredArticle =
    articles.find((a) => a.slug === 'how-to-get-rid-of-cat-urine-smell') ||
    articles[0];

  // Latest guides (excluding featured or newest 4)
  const latestGuides = articles.slice(0, 4);

  // Section 43: WHAT ARE YOU TRYING TO SOLVE? (8 Core Problems)
  const problemDiscoveryCards = [
    {
      title: 'Litter Box Smell',
      subtitle: 'Eliminate persistent ammonia odors and dusty air from litter pans',
      icon: Wind,
      slug: 'why-does-my-house-smell-like-cat-litter',
      category: 'Cat Litter Box',
      tag: 'Quick Fix',
    },
    {
      title: 'Cat Hair Everywhere',
      subtitle: 'Lift stubborn undercoat fur from sofas, wool rugs, and linen',
      icon: Brush,
      slug: 'how-to-get-cat-hair-off-furniture',
      category: 'Cleaning',
      tag: 'Daily Routine',
    },
    {
      title: 'Cat Urine Odor',
      subtitle: 'Neutralize deep uric acid crystals and prevent territorial re-marking',
      icon: Sparkles,
      slug: 'how-to-get-rid-of-cat-urine-smell',
      category: 'Cat Odor Removal',
      tag: 'Enzyme Solution',
    },
    {
      title: 'Litter Tracking',
      subtitle: 'Stop granules from scattering across hardwood and rug floors',
      icon: Footprints,
      slug: 'how-to-stop-cat-litter-tracking',
      category: 'Cat Litter Box',
      tag: 'Floor Care',
    },
    {
      title: 'Small Cat Space',
      subtitle: 'Create vertical territory and cozy sanctuaries in small apartments',
      icon: Home,
      slug: 'small-cat-room-ideas-for-apartments',
      category: 'Cat Rooms',
      tag: 'Space Design',
    },
    {
      title: 'Cat Grooming & Shedding',
      subtitle: 'Low-stress deshedding tools and brushing rituals to stop hairballs',
      icon: Scissors,
      slug: 'how-to-reduce-cat-shedding',
      category: 'Cat Grooming',
      tag: 'Coat Care',
    },
    {
      title: 'Indoor Cat Boredom',
      subtitle: 'Predatory play sequences, puzzle feeders, and mental stimulation',
      icon: Sun,
      slug: 'indoor-cat-enrichment-ideas',
      category: 'Cat Enrichment',
      tag: 'Behavior',
    },
    {
      title: 'Cat-Friendly Furniture',
      subtitle: 'Aesthetic solid wood perches and modern hidden litter credenzas',
      icon: Armchair,
      slug: 'modern-cat-furniture-ideas',
      category: 'Cat Furniture',
      tag: 'Scandinavian Decor',
    },
  ];

  // Section collections: 3 articles each
  const catHomeArticles = articles
    .filter((a) =>
      ['cat-home', 'cat-room-ideas', 'cat-furniture'].includes(a.categorySlug)
    )
    .slice(0, 3);

  const cleaningOdorArticles = articles
    .filter((a) =>
      ['cleaning', 'cat-odor-removal', 'cat-litter-box'].includes(
        a.categorySlug
      )
    )
    .slice(0, 3);

  const catCareArticles = articles
    .filter((a) =>
      ['cat-care', 'cat-grooming', 'indoor-cat-enrichment'].includes(
        a.categorySlug
      )
    )
    .slice(0, 3);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Clean Cat Home',
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Clean Cat Home | Cat Care, Cleaning & Home Ideas"
        description="Practical cat care, cleaning, odor removal, litter box tips, grooming guides, and stylish cat-friendly home ideas."
        canonical={siteConfig.url}
        structuredData={websiteSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center border-b border-[#E8E2D8] py-14 sm:py-16 md:py-24">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1789727143/hero_home_banner_background_image.jpg"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center md:object-[right_center]"
          />
        </div>

        {/* Semi-transparent Cream Overlay - Lowered opacity so background image is clearly visible */}
        <div
          className="absolute inset-0 z-1 pointer-events-none bg-[#FAF5ED]/35 md:bg-gradient-to-r md:from-[#FAF5ED]/60 md:via-[#FAF5ED]/40 md:to-[#FAF5ED]/20"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#8F6D48] px-3.5 py-1 rounded-full bg-[#FAF0EC]/95 backdrop-blur-xs border border-[#EACEC5] shadow-xs">
              CLEAN CAT HOME
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1F1E1B] tracking-tight leading-[1.15] drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
              Practical Ideas for Happier Cats & Cleaner Homes
            </h1>

            <p className="text-base sm:text-lg text-[#2E2B26] font-medium leading-relaxed max-w-2xl mx-auto font-sans drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              Simple solutions for cat litter, odors, grooming, indoor enrichment, and stylish cat-friendly homes.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/category/cat-care"
                className="px-7 py-3.5 rounded-full text-sm font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-all cursor-pointer shadow-md active:scale-98"
              >
                Explore Cat Care
              </Link>
              <Link
                to="/blog"
                className="px-7 py-3.5 rounded-full text-sm font-semibold bg-[#FDFBF8]/95 backdrop-blur-xs text-[#252422] border border-[#DDD5C7] hover:bg-[#F3EFE9] transition-all cursor-pointer shadow-xs active:scale-98"
              >
                Browse All Guides
              </Link>
            </div>

            {/* Subtle editorial trust proof */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#423E37] font-medium">
              <span className="flex items-center gap-1.5 bg-[#FAF5ED]/85 backdrop-blur-xs border border-[#E8E2D8]/80 px-3 py-1 rounded-full shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#436449]" />
                Non-Toxic Cleaning Methods
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF5ED]/85 backdrop-blur-xs border border-[#E8E2D8]/80 px-3 py-1 rounded-full shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#436449]" />
                Vet-Safety Conscious Advice
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF5ED]/85 backdrop-blur-xs border border-[#E8E2D8]/80 px-3 py-1 rounded-full shadow-2xs">
                <Heart className="w-4 h-4 text-[#B9593E]" />
                Scandinavian Home Aesthetics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20 md:space-y-24">
        {/* Section 43: WHAT ARE YOU TRYING TO SOLVE? (8 Core Problem Discovery Cards) */}
        <section className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF6F0] border border-[#E8E0D2]">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B9593E] block mb-2">
              Problem-First Navigation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252422] tracking-tight">
              What Are You Trying to Solve?
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#5C5852]">
              Select the specific issue you are experiencing at home to jump straight to practical, tested solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemDiscoveryCards.map((card, index) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={index}
                  to={`/blog/${card.slug}`}
                  className="group p-5 rounded-2xl bg-[#FDFBF8] border border-[#E5DDD0] hover:border-[#B9593E] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] group-hover:bg-[#FAF0EC] flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5 text-[#8F6D48] group-hover:text-[#B9593E] transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EBF1EC] text-[#3F5243]">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#252422] group-hover:text-[#B9593E] transition-colors leading-snug mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#5C5852] leading-relaxed line-clamp-2">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#8F6D48]">
                    <span>Read Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#B9593E]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Editorial Guide */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
              Featured Problem Solver
            </span>
            <span className="text-xs text-[#706B63] hidden sm:inline">
              Our most requested odor elimination routine
            </span>
          </div>
          <FeaturedArticle article={featuredArticle} />
        </section>

        {/* Featured Problem Section (3 Large Category Cards) */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48] block mb-2">
              Structured Practical Help
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252422] tracking-tight">
              Explore Our Core Pillars
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C5852]">
              Choose a core focus area to find actionable step-by-step guides tested for real home living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <CategoryCard
              title="CLEANING & ODOR"
              subtitle="Problem Focus 01"
              description="Simple ways to reduce litter smell, cat odors, hair, and everyday mess."
              href="/category/cleaning"
              icon="cleaning"
              articleCount={6}
            />
            <CategoryCard
              title="CAT-FRIENDLY HOME"
              subtitle="Problem Focus 02"
              description="Small-space cat rooms, furniture, storage, shelves, and stylish cat zones."
              href="/category/cat-home"
              icon="home"
              articleCount={4}
            />
            <CategoryCard
              title="CAT CARE"
              subtitle="Problem Focus 03"
              description="Practical grooming, enrichment, routines, and everyday indoor cat care."
              href="/category/cat-care"
              icon="care"
              articleCount={4}
            />
          </div>
        </section>

        {/* LATEST GUIDES */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-[#E8E2D8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
                Fresh From The Editors
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
                Latest Guides
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8F6D48] hover:text-[#B9593E] transition-colors"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestGuides.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <AdSlot position="top" />

        {/* CAT-FRIENDLY HOME (3 articles) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-[#E8E2D8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
                Interior Architecture & Layouts
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
                Cat-Friendly Home
              </h2>
            </div>
            <Link
              to="/category/cat-home"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8F6D48] hover:text-[#B9593E]"
            >
              <span>Explore home guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {catHomeArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* CLEANING & ODOR (3 articles) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-[#E8E2D8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B9593E]">
                Hygiene & Fresh Air
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
                Cleaning & Odor Removal
              </h2>
            </div>
            <Link
              to="/category/cleaning"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B9593E] hover:underline"
            >
              <span>Explore cleaning guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cleaningOdorArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* CAT CARE (3 articles) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-[#E8E2D8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A705E]">
                Feline Wellbeing & Grooming
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
                Everyday Cat Care
              </h2>
            </div>
            <Link
              to="/category/cat-care"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5A705E] hover:underline"
            >
              <span>Explore care guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {catCareArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Newsletter section */}
        <NewsletterSection />
      </main>
    </div>
  );
};
