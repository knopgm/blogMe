export type Infos = {
  readTime: string;
  publishedDate: string;
};

export type Article = {
  id: number;
  key: string;
  image: string;
  title: string;
  infos: Infos;
  shortDescription: string;
  readMoreUrl: string;
};
