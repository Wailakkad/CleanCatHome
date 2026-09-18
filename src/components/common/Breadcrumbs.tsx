import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="my-4 overflow-x-auto text-xs text-[#706B63]">
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[#706B63] hover:text-[#252422] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#B0A799] flex-shrink-0" />
              {item.url && !isLast ? (
                <Link
                  to={item.url}
                  className="text-[#706B63] hover:text-[#252422] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#252422] truncate max-w-[240px] md:max-w-[400px]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
