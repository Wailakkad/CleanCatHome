import React from 'react';
import { AlertCircle, Stethoscope } from 'lucide-react';

interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'vet' | 'caution';
}

export const WarningBox: React.FC<WarningBoxProps> = ({
  title = 'When to Seek Veterinary Advice',
  children,
  variant = 'vet',
}) => {
  return (
    <div
      role="note"
      className="my-8 p-6 sm:p-7 rounded-2xl bg-[#FCF7F6] border-2 border-[#ECCFC7] shadow-xs"
    >
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#B9593E] text-white flex-shrink-0">
          {variant === 'vet' ? (
            <Stethoscope className="w-3.5 h-3.5" />
          ) : (
            <AlertCircle className="w-3.5 h-3.5" />
          )}
        </span>
        <h4 className="font-serif text-base sm:text-lg font-bold text-[#6D2817]">
          {title}
        </h4>
      </div>
      <div className="text-sm text-[#4E2E25] leading-relaxed pl-8">
        {children}
      </div>
    </div>
  );
};
