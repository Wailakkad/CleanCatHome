import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  if (!items || items.length === 0) return null;

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="my-14 p-6 sm:p-8 rounded-3xl bg-[#FDFBF8] border border-[#E8E2D8]">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2D8]">
        <div className="w-9 h-9 rounded-full bg-[#EBF1EC] flex items-center justify-center text-[#3F5243]">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-[#252422]">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-[#706B63]">
            Expert editorial answers to common cat care and odor issues.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#252422] hover:text-[#B9593E] transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8F6D48] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#B9593E]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-sm text-[#4A443E] leading-relaxed border-t border-[#EFE9DE] bg-[#FDFBF8]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
