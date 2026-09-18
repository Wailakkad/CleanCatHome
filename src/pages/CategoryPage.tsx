import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/blog/ArticleCard';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { AdSlot } from '../components/common/AdSlot';
import {
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  BookOpen,
} from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const category = useMemo(() => {
    return categories.find((c) => c.slug === slug);
  }, [slug]);

  // Category articles
  const categoryArticles = useMemo(() => {
    if (!category) return [];

    // Special logic for "cleaning": includes cleaning, cat-odor-removal, and cat-litter-box
    if (category.slug === 'cleaning') {
      return articles.filter((a) =>
        ['cleaning', 'cat-odor-removal', 'cat-litter-box'].includes(a.categorySlug)
      );
    }

    return articles.filter((a) => a.categorySlug === category.slug);
  }, [category]);

  // Related categories
  const relatedCategories = useMemo(() => {
    if (!category) return [];
    return categories.filter((c) => category.relatedCategorySlugs.includes(c.slug));
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#252422] mb-4">
          Category Not Found
        </h1>
        <p className="text-sm text-[#5C5852] mb-8">
          The cat care category you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/blog"
          className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5]"
        >
          Explore All Guides
        </Link>
      </div>
    );
  }

  // Featured article for this category
  const featured =
    categoryArticles.find((a) => a.slug === category.featuredSlug) ||
    categoryArticles[0];

  const otherArticles = categoryArticles.filter((a) => a.id !== featured?.id);

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title={`${category.h1Title} | Clean Cat Home`}
        description={category.metaDescription}
        canonical={`${siteConfig.url}/category/${category.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: category.name }]} />

        {/* Category Header with Editorial Depth (150–300 words) */}
        <div className="max-w-4xl my-6 sm:my-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F6D48] px-3.5 py-1 rounded-full bg-[#FAF0EC] border border-[#EACEC5]">
              Topic Hub
            </span>
            <span className="text-xs text-[#8A8276]">
              {categoryArticles.length}{' '}
              {categoryArticles.length === 1
                ? 'practical guide'
                : 'practical guides'}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252422] tracking-tight leading-[1.15]">
            {category.h1Title}
          </h1>

          {/* Useful 150-300 word introduction */}
          <div className="text-base sm:text-lg text-[#4A453E] leading-relaxed space-y-3 font-normal">
            <p>{category.intro}</p>
            {category.longDescription && (
              <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed border-l-2 border-[#D8D0C3] pl-4 italic">
                {category.longDescription}
              </p>
            )}
          </div>
        </div>

        {/* Featured Problem Box (Section 44 Requirement) */}
        {category.featuredProblem && (
          <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#FAF0EC] border border-[#E8CEBF] flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B9593E]">
                <AlertCircle className="w-4 h-4 text-[#B9593E]" />
                <span>Featured Core Problem in This Category</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252422]">
                {category.featuredProblem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                {category.featuredProblem.description}
              </p>
            </div>
            <Link
              to={`/blog/${category.featuredProblem.slug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#B9593E] text-[#FAF8F5] hover:bg-[#9E4A33] transition-colors whitespace-nowrap self-start md:self-center shadow-xs"
            >
              <span>Read the Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Essential Category Guide */}
        {featured && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8F6D48]" />
                Essential Category Guide
              </span>
            </div>
            <FeaturedArticle article={featured} />
          </div>
        )}

        <AdSlot position="top" />

        {/* Other Category Guides Grid */}
        {otherArticles.length > 0 && (
          <section className="my-12">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E2D8]">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
                More Guides in {category.name}
              </h2>
              <span className="text-xs text-[#8A8276]">
                {otherArticles.length} additional articles
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Common Questions & FAQs for this Category (Section 44 Requirement) */}
        {category.commonQuestions && category.commonQuestions.length > 0 && (
          <section className="my-16 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8]">
            <div className="flex items-center gap-2.5 mb-2">
              <HelpCircle className="w-5 h-5 text-[#8F6D48]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
                Frequently Asked In {category.name}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252422] mb-6">
              Common Questions About {category.name}
            </h3>

            <div className="space-y-4">
              {category.commonQuestions.map((qa, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-xl bg-[#FDFBF8] border border-[#E8E2D8] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaqIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <h4 className="font-serif text-base sm:text-lg font-semibold text-[#252422]">
                        {qa.question}
                      </h4>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#8F6D48] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8A8276] flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-[#4A453E] leading-relaxed pt-3 border-t border-[#EFE9DF]">
                        {qa.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Categories Navigation */}
        {relatedCategories.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#E8E2D8]">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#252422] mb-6">
              Related Topics You Might Need
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/category/${rel.slug}`}
                  className="p-5 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] hover:border-[#B9593E] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8F6D48] block mb-1">
                      Explore Category
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#252422] mb-2">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#5C5852] line-clamp-3 leading-relaxed">
                      {rel.intro}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#8F6D48]">
                    <span>Browse {rel.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <AdSlot position="bottom" />
      </div>
    </div>
  );
};
