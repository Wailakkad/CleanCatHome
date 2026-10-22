import React from 'react';
import { CheckCircle2, FileDown } from 'lucide-react';

const included = [
  '30-page illustrated PDF',
  'Printable planning, shopping & maintenance worksheets',
  'Designed specifically for winter outdoor cat shelters',
];

export const ProductPricing: React.FC = () => {
  return (
    <section id="pricing" className="py-14 sm:py-20 bg-[#F3EFE9] border-y border-[#E8E2D8] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-sm p-8 sm:p-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Digital Download
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight mt-3 mb-4">
            Get the DIY Winter Cat Shelter Starter Kit
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#B9593E] font-semibold">
            Introductory price: $8.99 (digital download)
          </p>

          <ul className="inline-flex flex-col items-start gap-3 my-8 text-left">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[#332F2A] text-[15px] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#5A705E] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <a
              href="https://payhip.com/b/0QKcm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-base font-semibold bg-[#B9593E] text-[#FAF8F5] hover:bg-[#9E4A33] transition-colors shadow-sm"
            >
              <FileDown className="w-5 h-5" />
              Download the Starter Kit – $8.99
            </a>
          </div>

          <p className="text-sm text-[#8A8276] mt-6 max-w-md mx-auto leading-relaxed">
            If you have trouble accessing the file, just reply to your receipt email and we&rsquo;ll help you get it.
          </p>
        </div>
      </div>
    </section>
  );
};
