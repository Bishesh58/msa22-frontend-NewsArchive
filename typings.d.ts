export interface News {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  publishe_at: string;
  source: string;
  categories: [];
  relevance_score: null | undefined;
  locale: string;
}
