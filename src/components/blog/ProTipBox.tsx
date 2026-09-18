import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ProTipBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const ProTipBox: React.FC<ProTipBoxProps> = ({
  title = 'Pro Tip from the Clean Cat Home Team',
  children,
}) => {
  return (
    <aside
      aria-label="Editorial Pro Tip"
      className="my-8 p-5 sm:p-6 rounded-2xl bg-[#F2F6F3] border border-[#CFDFD3] shadow-xs"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3F5243] text-white flex-shrink-0">
          <Lightbulb className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#3F5243]">
          {title}
        </span>
      </div>
      <div className="text-sm text-[#2B382E] leading-relaxed pl-8 font-medium">
        {children}
      </div>
    </aside>
  );
};
