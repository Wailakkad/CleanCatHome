import React from 'react';
import { Zap, ArrowDown } from 'lucide-react';
import { QuickAnswer } from '../../types';

interface QuickAnswerBoxProps {
  quickAnswer: QuickAnswer | string;
  onScrollToDetails?: () => void;
}

export const QuickAnswerBox: React.FC<QuickAnswerBoxProps> = ({ quickAnswer, onScrollToDetails }) => {
  const summary = typeof quickAnswer === 'string' ? quickAnswer : quickAnswer.summary;
  const detail = typeof quickAnswer === 'string' ? undefined : quickAnswer.detail;
  const nextText = typeof quickAnswer === 'string' ? "Here's the complete step-by-step routine below..." : (quickAnswer.nextText || "Here's the complete step-by-step routine below...");

  return (
    <section
      aria-label="Quick Answer Summary"
      className="my-8 p-6 sm:p-7 rounded-2xl bg-[#FAF0EC] border-2 border-[#EACEC5] shadow-xs relative overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#B9593E] text-white">
          <Zap className="w-3.5 h-3.5 fill-current" />
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#B9593E]">
          Quick Answer • At a Glance
        </span>
      </div>

      <p className="font-serif text-lg sm:text-xl font-semibold text-[#252422] leading-snug mb-3">
        {summary}
      </p>

      {detail && (
        <p className="text-sm sm:text-[15px] text-[#5C5852] leading-relaxed mb-4">
          {detail}
        </p>
      )}

      <div className="pt-3 border-t border-[#E8D0C7] flex items-center justify-between text-xs text-[#8F6D48]">
        <span className="font-medium italic">{nextText}</span>
        {onScrollToDetails && (
          <button
            onClick={onScrollToDetails}
            className="flex items-center gap-1 font-semibold hover:text-[#B9593E] transition-colors cursor-pointer"
          >
            <span>Jump to steps</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  );
};
