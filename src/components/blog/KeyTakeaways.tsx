import React from 'react';
import { BookmarkCheck } from 'lucide-react';

interface KeyTakeawaysProps {
  items: string[];
}

export const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Key Takeaways"
      className="my-10 p-6 sm:p-7 rounded-2xl bg-[#F7F4EE] border border-[#DDD4C6] shadow-xs"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E0D2]">
        <BookmarkCheck className="w-5 h-5 text-[#8F6D48]" />
        <h3 className="font-serif text-xl font-bold text-[#252422]">
          Key Takeaways
        </h3>
      </div>

      <ul className="space-y-2.5">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm sm:text-[15px] text-[#3D3A35] leading-relaxed"
          >
            <span className="w-2 h-2 rounded-full bg-[#B9593E] mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
