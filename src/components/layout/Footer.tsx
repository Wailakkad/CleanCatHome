import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3EFE9] border-t border-[#E8E2D8] mt-20 text-[#4A443E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#252422]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="font-serif italic text-base text-[#3D3A35] leading-relaxed">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#706B63] leading-relaxed">
              A problem-solving content journal dedicated to Scandinavian-inspired pet home living, odor eradication, low-stress cat care routines, and aesthetic pet zones.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#8F6D48]">
              <a
                href={siteConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5"
              >
                <span>Follow on Pinterest</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Topics Col 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252422] mb-4">
              Care & Cleaning
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/category/cat-odor-removal" className="hover:text-[#B9593E] transition-colors">
                  Cat Odor Removal
                </Link>
              </li>
              <li>
                <Link to="/category/cat-litter-box" className="hover:text-[#B9593E] transition-colors">
                  Litter Box Care
                </Link>
              </li>
              <li>
                <Link to="/category/cleaning" className="hover:text-[#B9593E] transition-colors">
                  Cat Cleaning Tips
                </Link>
              </li>
              <li>
                <Link to="/category/cat-grooming" className="hover:text-[#B9593E] transition-colors">
                  Grooming & Shedding
                </Link>
              </li>
              <li>
                <Link to="/category/cat-care" className="hover:text-[#B9593E] transition-colors">
                  Indoor Cat Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252422] mb-4">
              Home & Living
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/category/cat-home" className="hover:text-[#B9593E] transition-colors">
                  Cat-Friendly Home
                </Link>
              </li>
              <li>
                <Link to="/category/cat-room-ideas" className="hover:text-[#B9593E] transition-colors">
                  Cat Room Ideas
                </Link>
              </li>
              <li>
                <Link to="/category/cat-furniture" className="hover:text-[#B9593E] transition-colors">
                  Modern Cat Furniture
                </Link>
              </li>
              <li>
                <Link to="/category/indoor-cat-enrichment" className="hover:text-[#B9593E] transition-colors">
                  Indoor Enrichment
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#B9593E] transition-colors font-medium">
                  Browse All Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252422] mb-4">
              Editorial & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerCompany.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-[#B9593E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-[11px] text-[#706B63] leading-relaxed">
              <span className="font-semibold text-[#252422] block mb-1">Veterinary Notice</span>
              Our guides offer practical home cleaning and lifestyle organization. We do not provide veterinary diagnoses. Always consult a licensed veterinarian for health concerns.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706B63]">
          <p>© {new Date().getFullYear()} Clean Cat Home. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
