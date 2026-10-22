import React from 'react';
import { ShieldAlert } from 'lucide-react';

const limitations = [
  'Designed to reduce exposure to cold, wind, and moisture, not guarantee safety in all conditions.',
  'You are responsible for assessing your local climate and the needs of individual cats.',
  'The guide does not include electrical heating solutions.',
  'Tips are general; always follow local laws and property rules.',
];

export const ProductSafety: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E8E2D8] bg-[#FDFBF8] p-7 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F7F3EE] border border-[#E8E2D8] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-[#8F6D48]" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#252422] tracking-tight">
              A Helpful Guide—With Realistic Expectations
            </h2>
          </div>
          <ul className="space-y-4">
            {limitations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#5C5852] text-[15px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F6D48] flex-shrink-0 mt-2.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
