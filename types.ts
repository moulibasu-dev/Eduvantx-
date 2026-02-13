
export interface Objective {
  title: string;
  objective: string;
  tactics: string[];
}

export interface Competitor {
  name: string;
  model: string;
  audience: string;
  usp: string;
  presence: string;
  notes: string;
}

export interface AdCompetitor {
  name: string;
  content: string[];
  platform: string;
  highlights: string[];
  strategy: string[];
}

export interface ICP {
  title: string;
  demographics: string[];
  triggers: string[];
  painPoints: string[];
}

export interface SEOKeyword {
  keyword: string;
  searches: string;
  competition: string;
}

export interface SEOStrategy {
  country: string;
  keywordAnalysis: string[];
  opportunities: string[];
  competitorInsights: string[];
  onPageSEO: string[];
  contentStrategy: string[];
  localSEO: string[];
}

export interface ContentCalendarItem {
  type: 'Hero' | 'Hub' | 'Hygiene';
  description: string;
  frequency: string;
  objective: string;
}
