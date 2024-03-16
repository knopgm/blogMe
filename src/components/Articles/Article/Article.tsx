import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { articles } from '../articles';
// import { articlesData } from '../../../utilities/articles/data';
import Hero from '../articlesComponents/Hero/Hero';

import styles from './Articles.module.css';

const Article = () => {
  // Hook to navigate to other path
  const navigate = useNavigate();
  // Hook to read URL path
  const { search } = useLocation();
  // Hook to read only the search Params of the URL -> after the '?'
  const urlSearchParams = new URLSearchParams(search);
  // Save the search param in a logical named variable
  const articleName = urlSearchParams.get('name') as string;

  // Save the specific search Param (in this case: the article name) in the list of articles
  // and use this variable to render all articles dynamically
  const article = articles[articleName];

  useEffect(() => {
    if (!article) {
      navigate('/blog-all');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <div data-testid={`article-wrapper`}>
      <article className={styles.articleWrapper}>
        <Hero
          title={article.title}
          readTime={article.metadata.readTime}
          date={article.metadata.date}
          imgdesktop={article.heroImg.desktop}
          imgmobile={article.heroImg.mobile}
        />
      </article>
    </div>
  );
};

export default Article;
