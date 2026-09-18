import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { categories } from '../data/categories';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleImage } from '../components/common/ArticleImage';
import { ArticleRenderer } from '../components/blog/ArticleRenderer';
import { PinterestSaveButton } from '../components/common/PinterestSaveButton';
import { TableOfContents } from '../components/blog/TableOfContents';
import { FAQSection } from '../components/blog/FAQSection';
import { AuthorBox } from '../components/blog/AuthorBox';
import { FeedbackBox } from '../components/blog/FeedbackBox';
import { ReadingProgressBar } from '../components/blog/ReadingProgressBar';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { NewsletterSection } from '../components/blog/NewsletterSection';
import { AdSlot } from '../components/common/AdSlot';
import {
  Clock,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Printer,
  RotateCcw,
  Tag,
  FolderOpen,
} from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => {
    return articles.find((a) => a.slug === slug);
  }, [slug]);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Find parent category object for hub links
  const categoryObj = categories.find((c) => c.slug === article.categorySlug);

  // Popular articles for sidebar (excluding current)
  const sidebarArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSteps = () => {
    const el =
      document.getElementById('step-by-step-guide') ||
      document.getElementById('step-one') ||
      document.getElementById('clean-carpet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Published and updated dates
  const publishedDate = article.datePublished || article.date;
  const modifiedDate = article.dateModified || article.date;
  const lastReviewedDate = article.lastReviewed || modifiedDate;

  // Article Schema
  const articleSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.metaDescription,
    image: [
      article.images.cover.src.startsWith('http')
        ? article.images.cover.src
        : `${siteConfig.url}${article.images.cover.src}`,
      ...article.images.supporting.map((img) =>
        img.src.startsWith('http') ? img.src : `${siteConfig.url}${img.src}`
      ),
    ],
    datePublished: '2026-09-16T08:00:00+00:00',
    dateModified: '2026-09-17T08:00:00+00:00',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.title,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/favicon.ico`,
      },
    },
  };

  // If FAQ exists, add FAQPage schema
  if (article.faq && article.faq.length > 0) {
    articleSchema['hasPart'] = {
      '@type': 'FAQPage',
      mainEntity: article.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  return (
    <div className="min-h-screen py-6 sm:py-10">
      {/* Reading Progress Bar (Fixed Top) */}
      <ReadingProgressBar />

      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonical={`${siteConfig.url}/blog/${article.slug}`}
        image={article.featuredImage}
        type="article"
        articleDate={article.date}
        articleAuthor={article.author.name}
        structuredData={articleSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: article.category, url: `/category/${article.categorySlug}` },
            { label: article.title },
          ]}
        />

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-6">
          {/* Main Content (8 cols on desktop) */}
          <article className="lg:col-span-8 flex flex-col">
            {/* Header / Intro Section */}
            <header className="space-y-4 mb-6">
              {/* Category & Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    to={`/category/${article.categorySlug}`}
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF0EC] text-[#B9593E] hover:bg-[#F5E2DA] border border-[#EACEC5] transition-colors"
                  >
                    {article.category}
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-[#8A8276]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Updated: {modifiedDate}
                    </span>
                  </div>
                </div>

                {/* Print button */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#706B63] hover:text-[#252422] transition-colors cursor-pointer px-2.5 py-1 rounded-lg border border-[#E8E2D8] bg-[#FDFBF8] print:hidden"
                  title="Print this guide without ads or navigation"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print guide</span>
                </button>
              </div>

              {/* H1 Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252422] tracking-tight leading-[1.18]">
                {article.title}
              </h1>

              {/* Problem-First Short Introduction (100–180 words) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <p className="text-base sm:text-lg text-[#3D3A35] leading-relaxed font-sans font-medium">
                  {article.excerpt}
                </p>
                {article.lastReviewed && (
                  <div className="mt-3 pt-2.5 border-t border-[#EDE7DE] flex items-center gap-2 text-[11px] text-[#8A8276]">
                    <RotateCcw className="w-3 h-3 text-[#5A705E]" />
                    <span>
                      Fact-checked & reviewed for non-toxic pet safety on{' '}
                      <strong>{lastReviewedDate}</strong> (Version{' '}
                      {article.contentVersion || '2.1'})
                    </span>
                  </div>
                )}
              </div>

              {/* Author & Pinterest Bar */}
              <div className="pt-3 pb-2 border-y border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E5DDD0] flex items-center justify-center text-sm">
                    🐾
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#252422] block">
                      {article.author.name}
                    </span>
                    <span className="text-[11px] text-[#8A8276]">
                      {article.author.title}
                    </span>
                  </div>
                </div>

                <PinterestSaveButton
                  url={`${siteConfig.url}/blog/${article.slug}`}
                  media={article.pinterestImage || article.images.cover.src}
                  description={article.title}
                />
              </div>
            </header>

            {/* Featured Hero Cover Image (1600x1000, 16:10 ratio, eager) */}
            <div className="mb-8">
              <ArticleImage
                src={article.images.cover.src}
                alt={article.images.cover.alt}
                caption={article.images.cover.caption}
                width={article.images.cover.width || 1600}
                height={article.images.cover.height || 1000}
                aspectRatio="16:10"
                priority={true}
                category={article.category}
                title={article.title}
              />
            </div>

            {/* In-content Top Ad Slot */}
            <div className="print:hidden">
              <AdSlot position="in-content" />
            </div>

            {/* Mobile / Tablet Inline Table of Contents (Collapsible) */}
            {article.toc && article.toc.length > 0 && (
              <div className="lg:hidden mb-8 print:hidden">
                <TableOfContents items={article.toc} variant="inline" />
              </div>
            )}

            {/* Structured Modular Article Content */}
            <ArticleRenderer
              article={article}
              onScrollToSteps={scrollToSteps}
            />

            {/* In-content Mid Ad Slot */}
            <div className="print:hidden">
              <AdSlot position="in-content" />
            </div>

            {/* Topic Category Hub Link */}
            {categoryObj && (
              <div className="my-8 p-6 rounded-2xl bg-[#F7F4EE] border border-[#DDD4C6] flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8F6D48] mb-1">
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Explore the Complete Topic Hub</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#252422]">
                    {categoryObj.h1Title}
                  </h4>
                  <p className="text-xs text-[#5C5852] mt-1 max-w-xl">
                    {categoryObj.intro}
                  </p>
                </div>
                <Link
                  to={`/category/${categoryObj.slug}`}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  View All {categoryObj.name} Guides
                </Link>
              </div>
            )}

            {/* Tags / Keywords */}
            {article.tags && article.tags.length > 0 && (
              <div className="my-6 pt-6 border-t border-[#E8E2D8] print:hidden">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A8276] block mb-3">
                  Topics in this Guide
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 rounded-lg text-xs bg-[#F3EFE9] text-[#5C5852] hover:bg-[#E8E2D8] hover:text-[#252422] transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {article.faq && article.faq.length > 0 && (
              <FAQSection items={article.faq} />
            )}

            {/* Reader Feedback: Was this guide helpful? */}
            <FeedbackBox articleSlug={article.slug} />

            {/* Editorial Author Box */}
            <AuthorBox author={article.author} />

            {/* Safety & Non-toxic Notice */}
            <div className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E5DDD0] text-xs text-[#706B63] leading-relaxed my-6">
              <div className="flex items-center gap-2 font-semibold text-[#252422] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5A705E]" />
                Editorial Integrity & Cat Safety Notice
              </div>
              <p>
                The cleaning solutions and home organization advice provided on Clean Cat Home are thoroughly researched for domestic feline households. Always avoid mixing chemical agents (never mix chlorine bleach with urine or ammonia). If your cat exhibits sudden behavioral changes, straining, or litter aversion, contact a licensed veterinarian immediately to rule out medical conditions.
              </p>
            </div>

            {/* Inline Newsletter Box */}
            <div className="print:hidden">
              <NewsletterSection variant="inline" />
            </div>

            {/* Related Articles Engine (Weighted Relevance Scoring) */}
            <RelatedArticles currentArticle={article} maxArticles={4} />
          </article>

          {/* Desktop Sidebar (4 cols on desktop) */}
          <aside className="lg:col-span-4 space-y-8 print:hidden">
            {article.toc && article.toc.length > 0 && (
              <div className="hidden lg:block sticky top-24 space-y-8">
                {/* Desktop Sticky Table of Contents */}
                <TableOfContents items={article.toc} variant="sidebar" />

                {/* Category Topic Hub Widget */}
                {categoryObj && (
                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] block mb-2">
                      Topic Collection
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#252422] mb-1.5">
                      {categoryObj.name}
                    </h4>
                    <p className="text-xs text-[#5C5852] leading-relaxed mb-4 line-clamp-3">
                      {categoryObj.intro}
                    </p>
                    <Link
                      to={`/category/${categoryObj.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B9593E] hover:underline"
                    >
                      <span>Explore all {categoryObj.name} guides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {/* Popular Guides Widget */}
                <div className="p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] block mb-3">
                    Popular Guides
                  </span>
                  <div className="space-y-3">
                    {sidebarArticles.map((sideArt) => (
                      <Link
                        key={sideArt.id}
                        to={`/blog/${sideArt.slug}`}
                        className="group block pb-3 border-b border-[#F0EBE1] last:border-0 last:pb-0"
                      >
                        <span className="text-[10px] uppercase font-semibold text-[#B9593E] block mb-0.5">
                          {sideArt.category}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-[#252422] group-hover:text-[#B9593E] transition-colors leading-snug">
                          {sideArt.title}
                        </h4>
                        <span className="text-[11px] text-[#8A8276] mt-1 block">
                          {sideArt.readingTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Pinterest Pin Card Widget */}
                {article.pinterestImage && (
                  <div className="p-5 rounded-2xl bg-[#FAF0EC] border border-[#EACEC5] text-center space-y-3 shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B9593E] block">
                      Save to Pinterest
                    </span>
                    <div className="relative aspect-[2/3] max-w-[190px] mx-auto rounded-xl overflow-hidden border border-[#E0C6BC] shadow-xs">
                      <img
                        src={article.pinterestImage}
                        alt={`Pinterest Pin: ${article.title}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-[#6B5A52] leading-snug">
                      Save this practical guide to your Pinterest cat or cleaning board.
                    </p>
                    <div className="flex justify-center pt-1">
                      <PinterestSaveButton
                        url={`${siteConfig.url}/blog/${article.slug}`}
                        media={article.pinterestImage}
                        description={article.title}
                        variant="badge"
                      />
                    </div>
                  </div>
                )}

                {/* Sidebar Ad Slot */}
                <AdSlot position="sidebar" />
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};
