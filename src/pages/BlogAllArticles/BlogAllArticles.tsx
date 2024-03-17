// import type { PropsWithChildren } from 'react';
import { useEffect, useState, useRef } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Pagination from '../../components/Pagination/Pagination';
import { ARTICLES } from '../../utilities/articles/data';
import type { Article } from '../../utilities/articles/types';
import heroColorfullFrame from './blogAllArticlesImgs/blogAllArticlesIntroFrameColors.svg';

import styles from './BlogAllArticles.module.css';

// This function slices the list of articles to a list hanging on the number of
function getArticlesForPage(
  pageNumber: number,
  articlesPerPage: number,
  allCardArticlesData?: Array<Article>
) {
  const pageFirstElementIndex = articlesPerPage * (pageNumber - 1);
  if (!allCardArticlesData) {
    return;
  }
  return allCardArticlesData.slice(
    pageFirstElementIndex,
    pageFirstElementIndex + articlesPerPage
  );
}

type BlogAllArticlesProps = {
  articles?: Array<Article>;
  articlesPerPage?: number;
  initialPage?: number;
};

const BlogAllArticles = ({
  articles = ARTICLES,
  articlesPerPage = 3,
  initialPage = 1,
}: BlogAllArticlesProps) => {
  const articlesCardList = articles;

  const [currentPage, setCurrentPage] = useState(initialPage);
  // // a ref to be used on the scrollIntoView method
  const headerSectionRef = useRef<HTMLParagraphElement>(null);
  // calls the slice function to have a default list of cards on the page
  const [displayedArticlesList, setDisplayedArticlesList] = useState(() => {
    return getArticlesForPage(currentPage, articlesPerPage, articlesCardList);
  });

  useEffect(() => {
    // Will call the slice function again to set the correspondent list of articles with if a new page is selected
    // the displayArticlesList will be mapped and displayed inside the render to render the article Cards
    setDisplayedArticlesList(
      getArticlesForPage(currentPage, articlesPerPage, articlesCardList)
    );
  }, [currentPage, articlesCardList, articlesPerPage]);

  // // logic to set how many buttons/pages should be displayed on the pagination
  const numberOfPages = Math.ceil(articlesCardList.length / articlesPerPage);

  // When User clicks on another page it will...
  const handlePaginationChange = (pageNumber: number) => {
    if (currentPage <= 0 || currentPage > numberOfPages) {
      return;
    }

    // Smothly scroll the page up
    headerSectionRef.current
      ? headerSectionRef.current?.scrollIntoView()
      : 'undefined';
    headerSectionRef.current?.scrollIntoView();

    // Set the number of the page
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={styles.headerAllArticles}>
        <title>All Articles</title>
        <div className={styles.introColorsContainer}>
          <img
            src={heroColorfullFrame}
            className={styles.introColorsImg}
            alt="colourfull-background"
          />
        </div>
        <div className={styles.headerAllArticlesGrid}>
          <h1 className={styles.headerAllArticles_Title}>Blog</h1>
          <p className={styles.headerAllArticles_Paragraph}>
            Get the latest research from industry experts to increase
            monetization of your existing user base and to retain more of your
            users on your web or mobile apps.
          </p>
          <div className={styles.subContentOfheaderAllArticles}>
            <h2 className={styles.subContentOfheaderAllArticles_Title}>
              All articles{' '}
            </h2>
            <p
              ref={headerSectionRef}
              className={styles.headerAllArticles_Paragraph}
            >
              Here's what we've been up to recently.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bodyAllArticles}>
        <h1 className={styles.bodyAllArticles_Title}>More Articles</h1>
        <div className={styles.bodyAllArticlesWrapper}>
          <div className={styles.articlesCardsGrid}>
            <div className={styles.articlesCardsGrid}>
              {displayedArticlesList?.map((article) => {
                return (
                  <ArticleCard
                    key={article.key}
                    image={article.image}
                    title={article.title}
                    readTime={article.infos.readTime}
                    publishedDate={article.infos.publishedDate}
                    shortDescription={article.shortDescription}
                    readMoreUrl={article.readMoreUrl}
                  />
                );
              })}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onPaginationChange={handlePaginationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAllArticles;
