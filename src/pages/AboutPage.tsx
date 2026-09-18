import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';
import { ShieldCheck, Heart, Sparkles, Home, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="About Clean Cat Home | Practical Feline Home Solutions"
        description="Clean Cat Home is an independent editorial journal focusing on practical, research-conscious cat care, odor elimination, and cat-friendly home organization."
        canonical={`${siteConfig.url}/about`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        <div className="my-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Editorial Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252422] tracking-tight">
            About Clean Cat Home
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#5C5852] leading-relaxed">
            &ldquo;Practical ideas for happier cats and cleaner homes.&rdquo;
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-stone max-w-none text-[#332F2A] leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Welcome to <strong>Clean Cat Home</strong>. We are an independent content website dedicated to solving the real, everyday problems that arise when sharing a stylish, modern home with indoor cats.
          </p>

          <p>
            For too long, pet lifestyle content has been divided into two unhelpful camps: dry clinical manuals that ignore modern interior aesthetics, and generic pet store blogs stuffed with plastic gadgets that end up in landfills. Clean Cat Home bridges this divide with practical, research-conscious advice that respects both your human home standards and your cat's biological well-being.
          </p>

          <div className="my-10 p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8E0D2] not-prose space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-[#252422]">
              Our Editorial Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#5A705E] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm font-semibold text-[#252422] block">Non-Toxic Solutions</strong>
                  <p className="text-xs text-[#5C5852] leading-relaxed mt-0.5">
                    We strictly avoid hazardous household chemicals, masking aerosols, and toxic essential oils that endanger feline health.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#B9593E] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm font-semibold text-[#252422] block">Tested Biological Logic</strong>
                  <p className="text-xs text-[#5C5852] leading-relaxed mt-0.5">
                    Our cleaning guides explain the underlying biochemical causes of stains and odors so you only clean once.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#8F6D48] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm font-semibold text-[#252422] block">Aesthetic Pet Architecture</strong>
                  <p className="text-xs text-[#5C5852] leading-relaxed mt-0.5">
                    We promote Scandinavian-inspired vertical cat walkways, solid oak perches, and discreet litter cabinet solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#5A705E] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm font-semibold text-[#252422] block">Feline Stress Awareness</strong>
                  <p className="text-xs text-[#5C5852] leading-relaxed mt-0.5">
                    We treat litter aversion and scratching as communicative signals of feline stress or discomfort, never spite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422] pt-4">
            Honest Editorial Disclaimer
          </h2>

          <p>
            We are dedicated cat owners, home stylists, and pet lifestyle researchers. <strong>We are not veterinarians or veterinary medical doctors.</strong>
          </p>

          <p>
            The content on Clean Cat Home is intended solely for home hygiene, pet-friendly interior planning, and general feline enrichment. Inappropriate urination, litter box refusal, abrupt lethargy, or behavioral changes are often the initial outward symptoms of feline medical conditions such as urinary tract infections (UTIs) or idiopathic cystitis. When in doubt, always seek the direct counsel of a licensed veterinary professional.
          </p>

          <div className="pt-8 border-t border-[#E8E2D8] not-prose flex flex-wrap items-center gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors"
            >
              Explore Our Guides
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full text-xs font-semibold bg-[#FDFBF8] text-[#252422] border border-[#DDD5C7] hover:bg-[#F3EFE9] transition-colors"
            >
              Contact Editorial Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
