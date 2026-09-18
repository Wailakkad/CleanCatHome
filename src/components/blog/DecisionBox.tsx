import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { DecisionItem } from '../../types';

interface DecisionBoxProps {
  title?: string;
  items: DecisionItem[];
}

export const DecisionBox: React.FC<DecisionBoxProps> = ({
  title = 'If Your Problem Is...',
  items,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#F5F2EB] border border-[#E0D8CC] shadow-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#DDD4C6]">
        <Compass className="w-5 h-5 text-[#8F6D48]" />
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252422]">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((dec, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#FDFBF8] border border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="sm:max-w-[45%]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F6D48] block mb-0.5">
                Situation
              </span>
              <span className="text-sm font-semibold text-[#252422]">
                {dec.condition}
              </span>
            </div>

            <div className="hidden sm:flex items-center text-[#8F6D48]">
              <ArrowRight className="w-4 h-4" />
            </div>

            <div className="sm:max-w-[50%] flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F5243] block mb-0.5">
                Recommended Action
              </span>
              <p className="text-sm text-[#332F2A] font-medium leading-snug">
                {dec.action}
              </p>
              {dec.note && (
                <p className="text-xs text-[#706B63] mt-1">
                  {dec.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
