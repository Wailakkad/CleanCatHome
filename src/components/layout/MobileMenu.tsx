import React from 'react';
import { Link } from 'react-router-dom';
import { X, Search, Heart, Sparkles, Wind, Home, Layout, Armchair, Scissors, Sun, Brush } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { categories } from '../../data/categories';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F5]/98 backdrop-blur-md animate-in fade-in duration-200">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D8]">
        <Link to="/" onClick={onClose} className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-tight text-[#252422]">
            {siteConfig.name}
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#8F6D48] font-medium">
            Feline Home Living
          </span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-lg text-[#5C5852] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <Link
          to="/search"
          onClick={onClose}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-[#F3EFE9] text-[#5C5852] text-sm hover:bg-[#ECE6DC] transition-colors"
        >
          <Search className="w-4 h-4 text-[#8F6D48]" />
          <span>Search cat care & cleaning guides...</span>
        </Link>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8276] mb-3 block">
            Core Navigation
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                to="/blog"
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-base font-medium text-[#252422] hover:bg-[#F3EFE9]"
              >
                All Guides & Articles
              </Link>
            </li>
            {siteConfig.primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-[#252422] hover:bg-[#F3EFE9]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8276] mb-3 block">
            Browse By Problem
          </span>
          <div className="grid grid-cols-1 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 text-sm text-[#4A443E] hover:text-[#252422] hover:bg-[#F3EFE9] rounded-lg"
              >
                <span>{cat.name}</span>
                <span className="text-xs text-[#8F6D48]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#E8E2D8]">
          <ul className="space-y-2 text-sm text-[#706B63]">
            <li>
              <Link to="/about" onClick={onClose} className="hover:text-[#252422]">About Clean Cat Home</Link>
            </li>
            <li>
              <Link to="/contact" onClick={onClose} className="hover:text-[#252422]">Contact Editorial Team</Link>
            </li>
            <li>
              <Link to="/disclaimer" onClick={onClose} className="hover:text-[#252422]">Editorial & Vet Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
