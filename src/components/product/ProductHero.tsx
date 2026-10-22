import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const heroBullets = [
  'Step-by-step illustrated storage-bin shelter instructions',
  'Printable checklists for materials, bedding, weatherproofing & maintenance',
  'Beginner-friendly tips for insulation, raised platforms, and placement',
  'Designed for outdoor, stray, and community cats in cold weather',
];

const heroImages = [
  {
    id: 'main-shelter',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/FIRST-Cat_sitting_near_outdoor_shelter_2K_20261022170930.jpg',
    alt: 'Outdoor winter cat shelter on a raised wooden platform with a cat sitting nearby in the snow.',
  },
  {
    id: 'placement-side',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/SECOND-Outdoor_winter_cat_shelter_2K_20261022170937.jpg',
    alt: 'DIY winter cat shelter placed near a fence and shrubs for wind protection in a snowy yard.',
  },
  {
    id: 'straw-bedding',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/THERTHY-Straw_bedding_in_cat_shelter_2K_20261022171019.jpg',
    alt: 'Close-up of clean dry straw bedding inside a winter cat shelter.',
  },
  {
    id: 'raised-platform',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/FOURTY-Outdoor_winter_cat_shelter_platform_2K_20261022171024.jpg',
    alt: 'Detail view of a winter cat shelter raised on a sturdy wooden platform above snow and wet ground.',
  },
  {
    id: 'pdf-preview',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/FIVE-DIY_Winter_Cat_Shelter_Guide_2K_20261022171027.jpg',
    alt: 'Printed DIY Winter Cat Shelter Starter Kit PDF pages and a tablet showing the digital guide cover.',
  },
  {
    id: 'worksheets',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693030/SIX-Winter_project_planning_workspac__2K_20261022171032.jpg',
    alt: 'Winter project planning workspace with shelter planning worksheets and checklists.',
  },
  {
    id: 'maintenance',
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792693029/SEVEN-Person_brushing_snow_from_shelter_2K_20261022171037.jpg',
    alt: 'Person brushing snow away from the entrance of a raised outdoor winter cat shelter while a cat watches.',
  },
];

export const ProductHero: React.FC = () => {
  const [activeImageId, setActiveImageId] = useState(heroImages[0].id);
  const activeImage = heroImages.find((img) => img.id === activeImageId)!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF1EC] via-[#FAF8F5] to-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center">
          {/* LEFT: Etsy-style product gallery — vertical thumbs (desktop) + main image */}
          <figure className="relative m-0">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Thumbnail strip: horizontal scroll on mobile, vertical column on desktop */}
              <div
                className="order-2 md:order-1 flex md:flex-col gap-2.5 md:gap-3 shrink-0 overflow-x-auto md:overflow-visible pb-1 md:pb-0 md:w-20 lg:w-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="group"
                aria-label="Product photo gallery"
              >
                {heroImages.map((img) => {
                  const isActive = img.id === activeImageId;
                  return (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImageId(img.id)}
                      aria-label={`View photo: ${img.alt}`}
                      aria-pressed={isActive}
                      className={`relative shrink-0 w-16 h-16 md:w-full md:h-auto md:aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F5243] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] ${
                        isActive
                          ? 'border-[#3F5243] ring-1 ring-[#3F5243] shadow-sm'
                          : 'border-[#E8E2D8] hover:border-[#D5E2D7] hover:shadow-sm opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Main image */}
              <div className="order-1 md:order-2 flex-1 min-w-0 relative rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#F3EFE9] shadow-[0_12px_40px_-12px_rgba(37,36,34,0.25)] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  key={activeImage.id}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Top-left badge overlay */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#FAF8F5]/95 border border-[#D5E2D7] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#3F5243] shadow-xs backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A705E]" aria-hidden="true" />
                  Digital PDF • Instant download
                </span>
              </div>
            </div>
          </figure>

          {/* RIGHT: compact product info card */}
          <div className="rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-[0_8px_30px_-12px_rgba(37,36,34,0.18)] p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#8F6D48] mb-3">
              DIY Winter Project · Outdoor Cat Shelter
            </p>

            <h1 className="font-serif text-[1.75rem] sm:text-4xl lg:text-[2.4rem] font-bold text-[#252422] tracking-tight leading-[1.12] mb-3">
              DIY Winter Cat Shelter Starter Kit
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-[#5C5852] leading-relaxed mb-5">
              A beginner-friendly PDF guide to planning, building, insulating, and weatherproofing a warmer outdoor cat shelter.
            </p>

            <ul className="space-y-2.5 mb-6">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-[#332F2A] text-[15px] leading-snug">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#5A705E] flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Price row */}
            <div className="pb-5 mb-5 border-b border-[#E8E2D8]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8276] mb-0.5">
                Introductory price
              </p>
              <p className="font-serif text-3xl font-bold text-[#252422] leading-none">
                $8.99
                <span className="text-sm font-sans font-medium text-[#8A8276] ml-1.5">US dollars</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://payhip.com/b/0QKcm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the DIY Winter Cat Shelter Starter Kit for $8.99"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#B9593E] text-[#FAF8F5] hover:bg-[#9E4A33] transition-colors shadow-sm text-center"
              >
                Get the Starter Kit – $8.99
              </a>
              <a
                href="#inside"
                className="self-start text-sm font-semibold text-[#3F5243] hover:text-[#B9593E] underline underline-offset-4 decoration-[#D5E2D7] hover:decoration-[#B9593E] transition-colors"
              >
                See what&rsquo;s inside the guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
