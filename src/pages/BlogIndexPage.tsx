import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { ArticleCard } from '../components/blog/ArticleCard';
import { SearchBar } from '../components/search/SearchBar';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AdSlot } from '../components/common/AdSlot';
import { NativeAd } from '../components/common/NativeAd';
import { articles } from '../data/articles';
import { siteConfig } from '../data/site';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CATEGORY_FILTERS = [
  { label: 'All', slug: 'all' },
  { label: 'Cleaning', slug: 'cleaning' },
  { label: 'Cat Odor', slug: 'cat-odor-removal' },
  { label: 'Litter Box', slug: 'cat-litter-box' },
  { label: 'Cat Home', slug: 'cat-home' },
  { label: 'Cat Rooms', slug: 'cat-room-ideas' },
  { label: 'Cat Furniture', slug: 'cat-furniture' },
  { label: 'Cat Care', slug: 'cat-care' },
  { label: 'Grooming', slug: 'cat-grooming' },
  { label: 'Indoor Cat Enrichment', slug: 'indoor-cat-enrichment' },
];

export const BlogIndexPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  const currentSort = searchParams.get('sort') || 'latest';

  const handleCategoryChange = (slug: string) => {
    const next = new URLSearchParams(searchParams);
    if (slug === 'all') {
      next.delete('category');
    } else {
      next.set('category', slug);
    }
    setSearchParams(next, { replace: true });
  };

  const handleSearchChange = (query: string) => {
    const next = new URLSearchParams(searchParams);
    if (!query) {
      next.delete('search');
    } else {
      next.set('search', query);
    }
    setSearchParams(next, { replace: true });
  };

  const handleSortChange = (sort: string) => {
    const next = new URLSearchParams(searchParams);
    if (sort === 'latest') {
      next.delete('sort');
    } else {
      next.set('sort', sort);
    }
    setSearchParams(next, { replace: true });
  };

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // 1. Category filter
      if (currentCategory !== 'all') {
        const matchesCat =
          article.categorySlug === currentCategory ||
          (currentCategory === 'cleaning' && ['cleaning', 'cat-odor-removal', 'cat-litter-box'].includes(article.categorySlug));
        if (!matchesCat) return false;
      }

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = article.title.toLowerCase().includes(q);
        const inExcerpt = article.excerpt.toLowerCase().includes(q);
        const inCategory = article.category.toLowerCase().includes(q);
        const inTags = article.tags.some((t) => t.toLowerCase().includes(q));
        const inKeywords = article.keywords?.some((k) => k.toLowerCase().includes(q));
        if (!inTitle && !inExcerpt && !inCategory && !inTags && !inKeywords) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (currentSort === 'popular') {
        if (a.isPopularProblem && !b.isPopularProblem) return -1;
        if (!a.isPopularProblem && b.isPopularProblem) return 1;
        return 0;
      }
      // default: latest by id descending
      return b.id.localeCompare(a.id);
    });
  }, [currentCategory, searchQuery, currentSort]);

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Cat Care & Home Guides | Clean Cat Home"
        description="Practical guides for solving everyday cat care, cleaning, odor, and home organization problems."
        canonical={`${siteConfig.url}/blog`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'All Guides' }]} />

        {/* Page Header */}
        <div className="max-w-3xl my-6 sm:my-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Practical Library
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252422] tracking-tight">
            Cat Care & Home Guides
          </h1>
          <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
            Practical guides for solving everyday cat care, cleaning, odor, and home organization problems.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mb-8">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search guides by problem (e.g. urine smell, litter tracking, cat hair)..."
          />
        </div>

        {/* Category Filters & Sort Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E2D8]">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {CATEGORY_FILTERS.map((cat) => {
              const active = currentCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#252422] text-[#FAF8F5] font-semibold'
                      : 'bg-[#FDFBF8] text-[#5C5852] border border-[#E8E2D8] hover:bg-[#F3EFE9]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#8A8276]" />
            <span className="text-xs text-[#706B63] font-medium">Sort:</span>
            <select
              value={currentSort}
              onChange={(e) => handleSortChange(e.target.value)}
              aria-label="Sort guides"
              className="text-xs font-semibold text-[#252422] bg-[#FDFBF8] border border-[#E8E2D8] rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer"
            >
              <option value="latest">Latest Guides</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between text-xs text-[#706B63] mb-6">
          <span>
            Showing <strong className="text-[#252422]">{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'guide' : 'guides'}
            {currentCategory !== 'all' && ` in ${CATEGORY_FILTERS.find((c) => c.slug === currentCategory)?.label}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(currentCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSearchParams({}, { replace: true });
              }}
              className="text-xs text-[#B9593E] hover:underline font-medium cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6 rounded-3xl bg-[#FAF8F5] border border-dashed border-[#E8E2D8] max-w-xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-[#252422] mb-2">
              No guides found
            </h3>
            <p className="text-sm text-[#5C5852] mb-6">
              We couldn’t find any guides matching your current search or category filter. Try another cat care or cleaning topic.
            </p>
            <button
              onClick={() => setSearchParams({}, { replace: true })}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors cursor-pointer"
            >
              View All Guides
            </button>
          </div>
        )}

        <NativeAd />

        <AdSlot position="bottom" />
      </div>
    </div>
  );
};
