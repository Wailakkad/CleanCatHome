export interface Author {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  url?: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleImageItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  section: string;
  width: number;
  height: number;
}

export interface ArticleImages {
  cover: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  supporting: ArticleImageItem[];
}

export interface QuickAnswer {
  summary: string;
  detail?: string;
  nextText?: string;
}

export interface MaterialItem {
  item: string;
  note?: string;
  optional?: boolean;
}

export interface StepItem {
  number: number;
  title: string;
  whatToDo: string;
  whyItMatters: string;
  tip?: string;
  mistake?: string;
}

export interface DecisionItem {
  condition: string;
  action: string;
  note?: string;
}

export interface MistakeItem {
  title: string;
  why: string;
  solution: string;
}

export interface ProTipItem {
  title?: string;
  text: string;
}

export interface RoutineItem {
  frequency: 'daily' | 'weekly' | 'monthly' | string;
  title?: string;
  tasks: string[];
}

export interface TroubleshootingItem {
  problem: string;
  causes: string[];
  solution: string;
  whenToEscalate?: string;
}

export interface ScenarioItem {
  label: string;
  situation: string;
  recommendation: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface ComparisonTableData {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface WarningData {
  title: string;
  text: string;
  action?: string;
}

export interface NextStepData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  categorySlug: string;
  tags: string[];
  keywords: string[];
  excerpt: string;
  author: Author;
  date: string;
  datePublished?: string;
  dateModified?: string;
  lastReviewed?: string;
  contentVersion?: number;
  readingTime: string;
  featuredImage: string;
  imageAlt: string;
  images: ArticleImages;
  pinterestImage?: string;
  content: string;
  quickAnswer?: QuickAnswer | string;
  materials?: MaterialItem[];
  steps?: StepItem[];
  decisions?: DecisionItem[];
  mistakes?: MistakeItem[];
  proTips?: ProTipItem[];
  routines?: RoutineItem[];
  troubleshooting?: TroubleshootingItem[];
  scenarios?: ScenarioItem[];
  comparisonTable?: ComparisonTableData;
  warning?: WarningData;
  keyTakeaways?: string[];
  nextStep?: NextStepData;
  toc?: TocItem[];
  faq?: FAQItem[];
  relatedArticles?: string[];
  isFeatured?: boolean;
  isPopularProblem?: boolean;
  popularProblemText?: string;
  sectionTheme?: 'cleaning' | 'cat-home' | 'cat-care';
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  h1Title: string;
  metaDescription: string;
  intro: string;
  longDescription?: string;
  iconName: string;
  featuredSlug?: string;
  relatedCategorySlugs: string[];
  featuredProblem?: {
    title: string;
    description: string;
    slug: string;
  };
  commonQuestions?: {
    question: string;
    answer: string;
  }[];
}

export interface BreadcrumbItem {
  label: string;
  url?: string;
}
