import React from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../types';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface AuthorBoxProps {
  author?: Author;
}

export const AuthorBox: React.FC<AuthorBoxProps> = ({ author }) => {
  const editorialName = author?.name || 'Clean Cat Home Editorial Team';
  const editorialTitle = author?.title || 'Home & Feline Living Guides';
  const editorialBio =
    author?.bio ||
    'Practical cat-home guides focused on cleaning, organization, enrichment, and everyday care. We research non-toxic cleaning methods, litter box ergonomics, and stress-free living solutions for indoor cats.';

  return (
    <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#F7F4EE] border border-[#E2DAD0] flex flex-col sm:flex-row items-start gap-5 shadow-xs">
      <div className="w-14 h-14 rounded-full bg-[#E5DDD0] border-2 border-[#FAF8F5] shadow-xs flex-shrink-0 flex items-center justify-center text-[#5A705E] font-serif font-bold text-xl">
        🐾
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="font-serif text-lg font-bold text-[#252422]">
            {editorialName}
          </span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EBF1EC] text-[#3F5243] font-semibold">
            {editorialTitle}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed mb-3">
          {editorialBio}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#8F6D48]">
          <Link
            to="/about"
            className="inline-flex items-center gap-1 hover:text-[#B9593E] transition-colors"
          >
            <span>About Clean Cat Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[#C5BBAE]">•</span>
          <span className="flex items-center gap-1 text-[#706B63]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5A705E]" />
            Evidence-backed, non-toxic pet care
          </span>
        </div>
      </div>
    </div>
  );
};
