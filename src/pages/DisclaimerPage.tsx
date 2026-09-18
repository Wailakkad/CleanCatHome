import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';
import { AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Veterinary & Cleaning Disclaimer | Clean Cat Home"
        description="Official veterinary medical disclaimer and home cleaning safety guidelines for Clean Cat Home."
        canonical={`${siteConfig.url}/disclaimer`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Editorial & Safety Disclaimer' }]} />

        <div className="my-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B9593E]">
            Safety & Medical Notice
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252422]">
            Veterinary & Safety Disclaimer
          </h1>
          <p className="text-xs text-[#706B63]">Last updated: September 16, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none text-[#332F2A] leading-relaxed space-y-6 text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-[#FAF0EC] border border-[#EACEC5] not-prose space-y-2">
            <div className="flex items-center gap-2 text-[#B9593E] font-semibold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Medical Emergency Notice</span>
            </div>
            <p className="text-xs text-[#4A443E] leading-relaxed">
              If your cat is straining to urinate, vocalizing in pain in the litter box, completely unable to pass urine, or acting unusually lethargic, <strong>this is a life-threatening veterinary medical emergency (such as a feline urinary obstruction)</strong>. Please transport your pet to an emergency veterinary clinic immediately.
            </p>
          </div>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">1. Not Veterinary Medical Advice</h2>
          <p>
            The content published on <strong>Clean Cat Home</strong> is intended strictly for general educational, home hygiene, interior organization, and cat lifestyle purposes. None of the articles, guides, or suggestions are intended to replace direct professional diagnosis, treatment, or clinical advice from a licensed Doctor of Veterinary Medicine (DVM). Always consult your veterinarian regarding symptoms, behavioral changes, or diet modifications.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">2. Chemical Safety & Toxic Interactions</h2>
          <p>
            When performing stain removal and sanitation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#4A443E]">
            <li>
              <strong>Never mix chlorine bleach with cat urine:</strong> Cat urine contains concentrated ammonia. Combining bleach with ammonia creates toxic, volatile chloramine gases that cause severe respiratory trauma to humans and animals.
            </li>
            <li>
              <strong>Never mix bleach with vinegar or hydrogen peroxide:</strong> Mixing acidic agents with sodium hypochlorite releases hazardous chlorine gas.
            </li>
            <li>
              <strong>Avoid toxic essential oils:</strong> Concentrated essential oils (including tea tree, eucalyptus, citrus, peppermint, cinnamon, and wintergreen) lack glucuronyl transferase metabolic pathways in feline livers and can cause severe liver failure.
            </li>
          </ul>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">3. Material Testing & Surface Safety</h2>
          <p>
            Different flooring materials, luxury vinyl planks (LVP), solid hardwoods, silk, velvet, and antique rugs react differently to cleaning agents. Clean Cat Home strongly advises always testing any enzymatic solution, vinegar dilution, or carpet cleaner on a small, hidden corner or inconspicuous swatch before full-scale application. Clean Cat Home assumes no liability for fabric discoloration, wood warping, or carpet dye bleeding.
          </p>
        </div>
      </div>
    </div>
  );
};
