import React from 'react';
import { Download, PencilRuler, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Get Instant Access',
    text: 'Download the 30-page PDF to your computer, phone, or tablet right after purchase.',
  },
  {
    icon: PencilRuler,
    title: 'Plan & Build at Your Own Pace',
    text: 'Follow the illustrated guide to plan your design, gather materials, insulate, and weatherproof your shelter.',
  },
  {
    icon: ClipboardCheck,
    title: 'Use Checklists All Winter',
    text: 'Print or reuse the worksheets to keep bedding dry, platforms stable, and entrances clear through storms.',
  },
];

export const ProductHowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#EBF1EC] border-y border-[#D5E2D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight">
            How It Works
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="relative rounded-2xl bg-[#FDFBF8] border border-[#D5E2D7] p-7">
              <span className="absolute top-5 right-6 font-serif text-4xl font-bold text-[#EBF1EC] select-none" aria-hidden="true">
                {index + 1}
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#EBF1EC] border border-[#D5E2D7] flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#3F5243]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#252422] mb-3">
                {title}
              </h3>
              <p className="text-[#5C5852] text-[15px] leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-center text-sm text-[#8A8276] mt-8 italic">
          Digital product only. No physical shelter or materials are included.
        </p>
      </div>
    </section>
  );
};
