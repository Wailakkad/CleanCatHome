import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { NextStepData } from '../../types';

interface NextStepBoxProps {
  data: NextStepData;
}

export const NextStepBox: React.FC<NextStepBoxProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#FDFBF8] border-2 border-[#E8E2D8] hover:border-[#C5BBAE] transition-all shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8F6D48] text-white">
          <Compass className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
          What to Do Next
        </span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252422] mb-2">
        {data.title}
      </h3>

      <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed mb-5">
        {data.description}
      </p>

      <Link
        to={data.linkUrl}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-all group"
      >
        <span>{data.linkText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};
