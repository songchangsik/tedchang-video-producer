export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  client: string;
  thumbnailUrl: string;
  previewVideoUrl?: string;
  videoUrl: string;
  planningIntent: string;
  role: string;
  performance: string;
  behindStory?: string;
  storyboardImages?: string[];
  tags: string[];
}

export interface PersonalYoutubeItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: string;
  isBest?: boolean;
  planningIntent: string;
  shootingPoint: string;
  editingPoint: string;
  keyLearnings: string;
}

export interface OtherWork {
  id: string;
  brand: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  role: string;
  period: string;
  toolsUsed: string[];
}

export interface PlanningDocument {
  id: string;
  title: string;
  client: string;
  summary: string;
  whyMade: string;
  target: string;
  problem: string;
  insight: string;
  concept: string;
  references: string;
  shootingMethod: string;
  thumbnailDirection: string;
  expectedPerformance: string;
  fullDetailsHtml?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  englishTitle: string;
  description: string;
  details: string[];
}

export interface BehindPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  date?: string;
}

export interface HeroData {
  name: string;
  role: string;
  subRoles: string;
  slogan: string;
  subtitle?: string;
  videoBackgroundUrl: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface AboutData {
  oneLiner: string;
  paragraphs: string[];
  profileImageUrl: string;
  strengths?: StrengthItem[];
}

export interface ContactData {
  email: string;
  youtubeUrl: string;
  youtubeHandle?: string;
  instagramUrl: string;
  instagramHandle?: string;
  blogUrl?: string;
  blogLabel?: string;
  blogDisplayText?: string;
  resumePdfUrl: string;
  portfolioPdfUrl: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: {
    tools: { name: string; icon?: string; desc: string }[];
    competencies: string[];
  };
  featuredWorks: FeaturedWork[];
  personalYoutube: {
    channelName: string;
    channelHandle: string;
    description: string;
    items: PersonalYoutubeItem[];
  };
  otherWorks: OtherWork[];
  plannings: PlanningDocument[];
  process: ProcessStep[];
  behindPhotos: BehindPhoto[];
  contact: ContactData;
}
