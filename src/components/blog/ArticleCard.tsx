import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { ArticleImage } from '../common/ArticleImage';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  aspectRatio?: '16:9' | '4:3' | '2:3' | '1:1';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  aspectRatio = '16:9',
}) => {
  return (
    <article className="group flex flex-col bg-[#FDFBF8] rounded-2xl border border-[#E8E2D8] overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#D5CDC0] hover:-translate-y-0.5">
      <Link to={`/blog/${article.slug}`} className="block relative overflow-hidden">
        <ArticleImage
          src={article.featuredImage}
          alt={article.imageAlt}
          aspectRatio={aspectRatio}
          category={article.category}
          title={article.title}
          className="group-hover:scale-102 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5]/95 text-[#8F6D48] shadow-xs backdrop-blur-xs">
          {article.category}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs text-[#8A8276] mb-2.5">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#252422] leading-snug tracking-tight mb-2.5 group-hover:text-[#B9593E] transition-colors">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-[#5C5852] line-clamp-2 leading-relaxed mb-5 flex-1">
          {article.excerpt}
        </p>

        <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#8F6D48] group-hover:text-[#B9593E]">
          <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-1.5 hover:underline">
            <span>Read full guide</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] text-[#A39A8E] font-normal">
            {article.author.name}
          </span>
        </div>
      </div>
    </article>
  );
};
