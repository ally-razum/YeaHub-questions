export interface BaseEntity {
  id: number;
  title: string;
  slug?: string;
  description: string;
  imageSrc?: string;
}

export interface Question {
  id: number;
  title: string;
  slug: string;
  description: string;
  code?: string;
  imageSrc?: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  questionSpecializations: BaseEntity[];
  questionSkills: BaseEntity[];
  questionTopics: BaseEntity[];
}

export interface QuestionsResponse {
  total: number;
  page: number;
  limit: number;
  data: Question[];
}
