import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search topics, cat odor solutions, litter box care...',
  autoFocus = false,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      className="relative w-full"
    >
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-[#8F6D48] pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] text-[#252422] placeholder:text-[#A39A8E] text-sm sm:text-base shadow-xs focus:outline-none focus:border-[#8F6D48] transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear search input"
            className="absolute right-4 p-1 rounded-full text-[#8A8276] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
};
