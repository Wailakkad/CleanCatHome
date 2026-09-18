import React, { useMemo } from 'react';
import { Article } from '../../types';
import { ArticleCard } from './ArticleCard';
import { articles } from '../../data/articles';

interface RelatedArticlesProps {
  currentArticle: Article;
  maxArticles?: number;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentArticle,
  maxArticles = 4,
}) => {
  const scoredRelated = useMemo(() => {
    const currentTags = new Set(currentArticle.tags.map((t) => t.toLowerCase()));
    const currentKeywords = new Set(currentArticle.keywords.map((k) => k.toLowerCase()));
    const explicitRelated = new Set(currentArticle.relatedArticles || []);

    const candidates = articles.filter((a) => a.slug !== currentArticle.slug);

    const scored = candidates.map((article) => {
      let score = 0;

      // 1. Explicit editor-curated related article bonus (highest priority)
      if (explicitRelated.has(article.slug)) {
        score += 20;
      }

      // 2. Primary category match (high weight: 10 pts)
      if (article.categorySlug === currentArticle.categorySlug) {
        score += 10;
      }

      // 3. Tag matches (medium weight: 4 pts each)
      article.tags.forEach((tag) => {
        if (currentTags.has(tag.toLowerCase())) {
          score += 4;
        }
      });

      // 4. Keyword overlap (medium weight: 2 pts each)
      article.keywords.forEach((kw) => {
        if (currentKeywords.has(kw.toLowerCase())) {
          score += 2;
        }
      });

      return { article, score };
    });

    // Sort descending by score, then take top articles
    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, maxArticles).map((item) => item.article);
  }, [currentArticle, maxArticles]);

  if (scoredRelated.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-[#E8E2D8] print:hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
            You May Also Like
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252422]">
            Related Practical Guides
          </h3>
        </div>
        <span className="text-xs text-[#706B63]">
          Curated recommendations for your cat and home
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {scoredRelated.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
