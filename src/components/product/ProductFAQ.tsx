import React from 'react';

const faqs = [
  {
    q: 'Is this guide only for one type of shelter?',
    a: 'The core step-by-step build focuses on a beginner-friendly insulated storage-bin design, but the planning, placement, and maintenance checklists can apply to other shelter styles too.',
  },
  {
    q: 'Do I need power or heaters?',
    a: 'No. The kit focuses on non-electrical insulation, elevation, and bedding methods for unheated outdoor shelters.',
  },
  {
    q: 'Can I use this outside the US?',
    a: 'Yes. The principles work in many cold climates. You may need to adjust materials and techniques based on what’s available locally.',
  },
  {
    q: 'Is this suitable for complete beginners?',
    a: 'Yes. The kit was created for people who have never built a winter cat shelter before and want a simple, organized plan to follow.',
  },
];

export const ProductFAQ: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight">
            Questions You Might Have
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-[#E8E2D8] bg-[#FDFBF8] px-6 py-5 open:border-[#D5E2D7] transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#252422]">
                <span>{q}</span>
                <span
                  className="text-[#8F6D48] text-xl font-sans transition-transform group-open:rotate-45 flex-shrink-0"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="text-[#5C5852] text-[15px] leading-relaxed mt-3 pr-6">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
