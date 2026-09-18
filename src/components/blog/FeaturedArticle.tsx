import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { ArticleImage } from '../common/ArticleImage';
import { ArrowRight, Clock, Bookmark } from 'lucide-react';
import { PinterestSaveButton } from '../common/PinterestSaveButton';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="relative rounded-3xl bg-[#FDFBF8] border border-[#E8E2D8] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual col */}
        <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[#E8E2D8]">
          <Link to={`/blog/${article.slug}`} className="block overflow-hidden group">
            <ArticleImage
              src={article.featuredImage}
              alt={article.imageAlt}
              aspectRatio="16:9"
              category={article.category}
              title={article.title}
              className="group-hover:scale-102 transition-transform duration-500"
            />
          </Link>
        </div>

        {/* Content col */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF0EC] text-[#B9593E] border border-[#EACEC5]">
              {article.category}
            </span>
            <span className="text-xs text-[#8A8276] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422] leading-tight tracking-tight">
            <Link to={`/blog/${article.slug}`} className="hover:text-[#B9593E] transition-colors">
              {article.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-all cursor-pointer shadow-xs"
            >
              <span>Read complete guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <PinterestSaveButton
              url={`https://cleancathome.com/blog/${article.slug}`}
              media={article.featuredImage}
              description={article.title}
              variant="compact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
