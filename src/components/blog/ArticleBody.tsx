import React, { useMemo } from 'react';
import { ArticleImage } from '../common/ArticleImage';
import { ArticleImageItem } from '../../types';

interface ArticleBodyProps {
  content: string;
  supportingImages: ArticleImageItem[];
  category?: string;
  articleTitle?: string;
}

interface ContentSection {
  id: string;
  headingHtml?: string;
  bodyHtml: string;
  isIntro?: boolean;
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({
  content,
  supportingImages = [],
  category = 'Guide',
  articleTitle = '',
}) => {
  // Parse content into sections split by <h2 id="..."
  const parsedSections = useMemo(() => {
    const h2Regex = /<h2\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/gi;
    const matches: { id: string; fullMatch: string; index: number; length: number }[] = [];
    let match: RegExpExecArray | null;

    while ((match = h2Regex.exec(content)) !== null) {
      matches.push({
        id: match[1],
        fullMatch: match[0],
        index: match.index,
        length: match[0].length,
      });
    }

    if (matches.length === 0) {
      return [
        {
          id: 'intro',
          bodyHtml: content,
          isIntro: true,
        },
      ];
    }

    const sections: ContentSection[] = [];

    // 1. Intro block before first <h2>
    const introText = content.substring(0, matches[0].index).trim();
    if (introText) {
      sections.push({
        id: 'intro',
        bodyHtml: introText,
        isIntro: true,
      });
    }

    // 2. Headings & bodies
    for (let i = 0; i < matches.length; i++) {
      const current = matches[i];
      const nextIndex = i + 1 < matches.length ? matches[i + 1].index : content.length;
      const sectionHtml = content.substring(current.index, nextIndex).trim();

      sections.push({
        id: current.id,
        headingHtml: current.fullMatch,
        bodyHtml: sectionHtml,
        isIntro: false,
      });
    }

    return sections;
  }, [content]);

  // Pair each supporting image (6 images total) to a section
  // Image 1 of supporting is Image 2 of the article (Problem/Context) -> goes right after intro or first section
  // Images 2, 3, 4, 5, 6 go to subsequent sections
  const sectionsWithImages = useMemo(() => {
    // Clone array of images
    const unassignedImages = [...supportingImages];
    const sectionImageMap: Record<number, ArticleImageItem[]> = {};

    // First attempt: match by explicit image.section === section.id
    parsedSections.forEach((section, sIdx) => {
      sectionImageMap[sIdx] = [];
      const matchIndex = unassignedImages.findIndex(
        (img) => img.section && img.section === section.id
      );
      if (matchIndex !== -1) {
        sectionImageMap[sIdx].push(unassignedImages[matchIndex]);
        unassignedImages.splice(matchIndex, 1);
      }
    });

    // Second pass: distribute remaining unassigned images sequentially
    let nextTargetSection = 0;
    unassignedImages.forEach((img) => {
      // Find a section with fewer images, or cycle through
      const targetIdx = nextTargetSection % Math.max(parsedSections.length, 1);
      if (!sectionImageMap[targetIdx]) {
        sectionImageMap[targetIdx] = [];
      }
      sectionImageMap[targetIdx].push(img);
      nextTargetSection++;
    });

    return parsedSections.map((section, idx) => ({
      ...section,
      images: sectionImageMap[idx] || [],
    }));
  }, [parsedSections, supportingImages]);

  return (
    <div className="article-body-stream space-y-10">
      {sectionsWithImages.map((section, index) => (
        <section
          key={`${section.id}-${index}`}
          className="article-editorial-section scroll-mt-24"
          aria-labelledby={section.id}
        >
          {/* Section HTML Content */}
          <div
            className="prose prose-stone max-w-none text-[#332F2A] leading-relaxed text-base sm:text-[17px] [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-semibold [&>h2]:text-[#252422] [&>h2]:mt-10 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-[#252422] [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-5 [&>ul]:my-6 [&>ul]:space-y-3"
            dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
          />

          {/* Editorial Supporting Image(s) positioned next to this section */}
          {section.images.map((img) => (
            <div key={img.id || img.src} className="my-8 sm:my-10">
              <ArticleImage
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                width={img.width || 1200}
                height={img.height || 800}
                aspectRatio="3:2"
                priority={false}
                loading="lazy"
                category={category}
                title={articleTitle ? `${articleTitle} • ${img.alt}` : img.alt}
              />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};
