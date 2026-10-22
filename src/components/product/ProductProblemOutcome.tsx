import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const struggles = [
  '“I’m not sure how to build a simple, safe winter cat shelter.”',
  '“I don’t know which insulation and bedding actually stay warm when they get damp.”',
  '“My shelter gets wet or wobbly after snow and rain.”',
  '“I’m afraid of making a mistake that leaves cats cold.”',
];

const outcomes = [
  'Plan a practical shelter design before buying materials.',
  'Build an insulated storage-bin shelter step-by-step.',
  'Keep bedding drier with better weatherproofing and elevation.',
  'Maintain shelters through storms with printable checklists.',
];

export const ProductProblemOutcome: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight">
            Worried About Outdoor Cats in Freezing Weather?
          </h2>
          <p className="text-[#5C5852] leading-relaxed text-base sm:text-lg">
            When temperatures drop, many caregivers want to help outdoor cats but feel unsure where to start. Online tutorials can be overwhelming, and it&rsquo;s hard to know which advice to trust for insulation, moisture control, and safe dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E8E2D8] bg-[#FDFBF8] p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#FAF0EC] flex items-center justify-center">
                <AlertTriangle className="w-4.5 h-4.5 text-[#B9593E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#252422]">
                Common Winter Struggles
              </h3>
            </div>
            <ul className="space-y-3.5">
              {struggles.map((item) => (
                <li key={item} className="text-[#5C5852] text-[15px] leading-relaxed pl-4 border-l-2 border-[#E8E2D8]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#D5E2D7] bg-[#EBF1EC] p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#FDFBF8] flex items-center justify-center">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#3F5243]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#252422]">
                What This Kit Helps You Do
              </h3>
            </div>
            <ul className="space-y-3.5">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#332F2A] text-[15px] leading-relaxed">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#5A705E] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
