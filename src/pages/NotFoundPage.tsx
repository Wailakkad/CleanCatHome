import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { SearchBar } from '../components/search/SearchBar';
import { ArrowLeft, Home, Sparkles, Heart } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEOHead
        title="Page Not Found | Clean Cat Home"
        description="The cat care guide or home idea you were looking for could not be found."
      />

      <div className="max-w-xl w-full text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B9593E] px-3 py-1 rounded-full bg-[#FAF0EC] border border-[#EACEC5]">
          Error 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252422]">
          Page Not Found
        </h1>

        <p className="text-base text-[#5C5852] leading-relaxed">
          The cat guide you’re looking for seems to have wandered off or found a cozy hiding spot under the couch.
        </p>

        <div className="py-2">
          <SearchBar
            value=""
            onChange={() => {}}
            onSubmit={() => {}}
            placeholder="Search our feline cleaning & home guides..."
          />
        </div>

        <div className="pt-4 border-t border-[#E8E2D8]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8276] block mb-3">
            Explore Popular Categories Instead
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/category/cleaning"
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#FAF0EC] text-[#B9593E] hover:bg-[#F5E2DA] border border-[#EACEC5]"
            >
              Cleaning & Odor
            </Link>
            <Link
              to="/category/cat-home"
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#F7F3EE] text-[#8F6D48] hover:bg-[#EAE2D5] border border-[#E5DDD0]"
            >
              Cat-Friendly Home
            </Link>
            <Link
              to="/category/cat-care"
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#EBF1EC] text-[#3F5243] hover:bg-[#DEE8E0] border border-[#D4E0D6]"
            >
              Cat Care & Grooming
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
