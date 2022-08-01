export interface Widget {
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

export interface News {
  title: string;
  author: string;
  published_date: string;
  published_date_precision: string;
  link: string;
  clean_url: string;
  summary: string;
  rights: string;
  rank: numeric;
  topic: string;
  country: string;
  language: string;
  authors: string;
  media: string;
  is_opinion: false;
  twitter_account: string;
  _score: numeric;
  _id: string;
}
