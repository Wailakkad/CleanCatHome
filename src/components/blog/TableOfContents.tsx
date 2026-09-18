import React, { useState, useEffect } from 'react';
import { TocItem } from '../../types';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
  variant?: 'inline' | 'sidebar';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, variant = 'sidebar' }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(variant === 'sidebar');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -65% 0%' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="p-5 sm:p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-xs print:hidden"
    >
      <button
        type="button"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-2 pb-3 border-b border-[#F0EBE1] text-left cursor-pointer lg:cursor-default"
      >
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-[#8F6D48]" />
          <span className="font-serif text-base font-bold text-[#252422]">
            On This Page
          </span>
        </div>
        <div className="lg:hidden text-[#8A8276]">
          {isMobileOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      <div className={`${isMobileOpen ? 'block' : 'hidden'} lg:block mt-3`}>
        <ul className="space-y-1 text-xs sm:text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={item.level === 3 ? 'pl-3' : ''}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToHeading(e, item.id)}
                  className={`block py-1.5 transition-colors leading-snug rounded-md px-2 ${
                    isActive
                      ? 'font-semibold text-[#B9593E] bg-[#FAF0EC] border-l-2 border-[#B9593E]'
                      : 'text-[#5C5852] hover:text-[#252422] hover:bg-[#F3EFE9]'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
