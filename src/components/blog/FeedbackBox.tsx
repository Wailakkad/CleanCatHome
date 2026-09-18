import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

interface FeedbackBoxProps {
  articleSlug: string;
}

export const FeedbackBox: React.FC<FeedbackBoxProps> = ({ articleSlug }) => {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`cch_feedback_${articleSlug}`);
      if (stored === 'yes' || stored === 'no') {
        setResponse(stored);
      }
    } catch {
      // localStorage may be disabled
    }
  }, [articleSlug]);

  const handleVote = (vote: 'yes' | 'no') => {
    setResponse(vote);
    try {
      localStorage.setItem(`cch_feedback_${articleSlug}`, vote);
    } catch {
      // localStorage may be disabled
    }
  };

  return (
    <div className="my-8 p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] text-center print:hidden shadow-xs">
      <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48] block mb-2">
        Was this guide helpful?
      </span>

      {response ? (
        <div className="flex items-center justify-center gap-2 text-sm text-[#3F5243] font-medium py-1">
          <CheckCircle2 className="w-4 h-4 text-[#5A705E]" />
          <span>Thank you for helping us improve our editorial guides!</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            type="button"
            onClick={() => handleVote('yes')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#FAF8F5] border border-[#DDD5C7] text-[#252422] hover:bg-[#EBF1EC] hover:border-[#CFDFD3] hover:text-[#3F5243] transition-all cursor-pointer shadow-xs active:scale-98"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Yes, it helped</span>
          </button>
          <button
            type="button"
            onClick={() => handleVote('no')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#FAF8F5] border border-[#DDD5C7] text-[#252422] hover:bg-[#FAF0EC] hover:border-[#EACEC5] hover:text-[#B9593E] transition-all cursor-pointer shadow-xs active:scale-98"
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>Not quite</span>
          </button>
        </div>
      )}
    </div>
  );
};
