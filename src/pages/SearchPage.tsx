import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/common/SEOHead';
import { SearchBar } from '../components/search/SearchBar';
import { ArticleCard } from '../components/blog/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Search, Sparkles } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchChange = (val: string) => {
    setQuery(val);
    const next = new URLSearchParams(searchParams);
    if (val.trim()) {
      next.set('q', val.trim());
    } else {
      next.delete('q');
    }
    setSearchParams(next, { replace: true });
  };

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    return articles.filter((article) => {
      const inTitle = article.title.toLowerCase().includes(q);
      const inExcerpt = article.excerpt.toLowerCase().includes(q);
      const inCategory = article.category.toLowerCase().includes(q);
      const inTags = article.tags.some((t) => t.toLowerCase().includes(q));
      const inKeywords = article.keywords?.some((k) => k.toLowerCase().includes(q));
      return inTitle || inExcerpt || inCategory || inTags || inKeywords;
    });
  }, [query]);

  const popularSearches = [
    'cat urine smell',
    'litter box cleaning',
    'cat hair furniture',
    'litter tracking',
    'cat wall',
    'shedding',
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title={query ? `Search Results for "${query}" | Clean Cat Home` : 'Search Practical Cat Guides | Clean Cat Home'}
        description="Search our full database of practical cat cleaning, odor removal, litter box, and cat-friendly home guides."
        canonical={`${siteConfig.url}/search`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Search' }]} />

        <div className="max-w-3xl my-6 sm:my-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Content Search
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252422] tracking-tight">
            Search Clean Cat Home
          </h1>
          <p className="text-base text-[#5C5852] leading-relaxed">
            Quickly find answers to feline odors, litter management, grooming routines, and small-space cat room ideas.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-2xl mb-6">
          <SearchBar
            value={query}
            onChange={handleSearchChange}
            autoFocus
            placeholder="Search problems (e.g. cat urine, smell, litter scooping, scratching)..."
          />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs text-[#706B63]">
          <span className="font-semibold text-[#8A8276]">Popular searches:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => handleSearchChange(term)}
              className="px-3 py-1 rounded-full bg-[#F3EFE9] text-[#4A443E] hover:bg-[#E8E2D8] hover:text-[#252422] transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results Area */}
        {query.trim() ? (
          <div>
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E8E2D8] text-sm text-[#706B63]">
              <span>
                Found <strong className="text-[#252422]">{results.length}</strong> {results.length === 1 ? 'guide' : 'guides'} for &ldquo;{query}&rdquo;
              </span>
              <button
                onClick={() => handleSearchChange('')}
                className="text-xs text-[#B9593E] hover:underline cursor-pointer"
              >
                Clear search
              </button>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-6 rounded-3xl bg-[#FAF8F5] border border-dashed border-[#E8E2D8] max-w-xl mx-auto">
                <Search className="w-12 h-12 text-[#8F6D48] mx-auto mb-4 opacity-50" />
                <h3 className="font-serif text-2xl font-semibold text-[#252422] mb-2">
                  No guides found.
                </h3>
                <p className="text-sm text-[#5C5852] mb-6">
                  Try another cat care or cleaning topic, or browse our organized categories.
                </p>
                <Link
                  to="/blog"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors"
                >
                  Browse All Guides
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-[#252422] mb-6">
              Or Browse Recommended Starter Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
