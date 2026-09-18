import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Heart, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: 'cleaning' | 'home' | 'care';
  articleCount?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  description,
  href,
  icon,
  articleCount,
}) => {
  const iconMap = {
    cleaning: <Sparkles className="w-6 h-6 text-[#B9593E]" />,
    home: <Home className="w-6 h-6 text-[#8F6D48]" />,
    care: <Heart className="w-6 h-6 text-[#5A705E]" />,
  };

  const bgMap = {
    cleaning: 'bg-[#FAF0EC] border-[#EACEC5]',
    home: 'bg-[#F7F3EE] border-[#E5DDD0]',
    care: 'bg-[#EBF1EC] border-[#D4E0D6]',
  };

  return (
    <Link
      to={href}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] hover:border-[#D0C7B8] hover:shadow-md transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${bgMap[icon]}`}>
            {iconMap[icon]}
          </div>
          {articleCount !== undefined && (
            <span className="text-xs font-semibold text-[#8A8276] uppercase tracking-wider">
              {articleCount} Guides
            </span>
          )}
        </div>

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#8F6D48] block mb-1">
          {subtitle}
        </span>

        <h3 className="font-serif text-2xl font-semibold text-[#252422] mb-3 group-hover:text-[#B9593E] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-[#5C5852] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#8F6D48] group-hover:text-[#B9593E]">
        <span>Explore practical solutions</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
