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

type ArticleDetailsContentPlain = {
  type: 'plain';
  title?: string;
  body: string;
};

type ArticleDetailsContentImage = {
  type: 'image';
  sources: {
    desktop: string;
    mobile: string;
  };
};

type ArticleDetailsContentList = {
  type: 'list';
  title?: string;
  body?: string;
  subSections: Array<{
    title: string;
    body: string;
  }>;
};

type ArticleDetailsContentListWithBulletPoints = {
  type: 'listWithBulletPoints';
  title?: string;
  body?: string;
  subSections: Array<{
    title: string;
    body: string;
  }>;
};

type ArticleDetailsContent =
  | ArticleDetailsContentPlain
  | ArticleDetailsContentImage
  | ArticleDetailsContentList
  | ArticleDetailsContentListWithBulletPoints;

export type ArticleDetails = {
  id: number;
  key: string;
  navbarBackground: boolean;
  title: string;
  heroImg: {
    desktop: string;
    mobile: string;
  };
  metadata: {
    readTime: string;
    date: string;
  };
  highlight: {
    body: string;
  };
  content: Array<ArticleDetailsContent>;
};
