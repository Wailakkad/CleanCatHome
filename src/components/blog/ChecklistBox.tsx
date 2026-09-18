import React from 'react';
import { CheckSquare, Check } from 'lucide-react';
import { MaterialItem } from '../../types';

interface ChecklistBoxProps {
  title?: string;
  items: MaterialItem[];
}

export const ChecklistBox: React.FC<ChecklistBoxProps> = ({
  title = "What You'll Need",
  items,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#F8F6F1] border border-[#E2DAD0] shadow-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E2D8]">
        <CheckSquare className="w-5 h-5 text-[#8F6D48]" />
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252422]">
          {title}
        </h3>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((mat, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EDE7DE] text-sm text-[#332F2A]"
          >
            <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border border-[#C5BBAE] flex items-center justify-center text-[#8F6D48] bg-[#FAF8F5]">
              <Check className="w-3.5 h-3.5" />
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-medium text-[#252422] block">
                {mat.item}
                {mat.optional && (
                  <span className="ml-1.5 text-[11px] font-normal uppercase text-[#8A8276] px-1.5 py-0.5 rounded bg-[#F3EFE9]">
                    Optional
                  </span>
                )}
              </span>
              {mat.note && (
                <span className="text-xs text-[#706B63] block mt-0.5">
                  {mat.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
