import { useParams } from 'react-router-dom';
import { articles } from '../articles';
import { ARTICLES } from '../../../utilities/articles/data';
import Hero from './components/Hero/Hero';
import HighlightedSection from './components/HighlightedSection/HighlightedSection';
import PlainSection from './components/PlainSection/PlainSection';
import Image from './components/Image/Image';
import SectionList from './components/SectionList/SectionList';
import SectionListWithBulletPoints from './components/SectionListWithBulletPoints/SectionListWithBulletPoints';
import ReadNextArticleCard from '../../ReadNextArticleCards/ReadNextArticleCards';
import { getNextArticles } from '../../../utilities/getNextArticles';

import styles from './Articles.module.css';

const Article = () => {
  // Will read the path from the URL, that is the same as the key property
  // in each article
  const { key } = useParams<{ key: string }>();

  const articleName = key;

  // Save the specific search Param (in this case: the article name) in the
  // list of articles and use this variable to render all articles dynamically
  const article = articleName ? articles[articleName] : undefined;

  if (!article) {
    return null;
  }

  const nextArticles = getNextArticles(article.id, ARTICLES);

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

        <HighlightedSection body={article.highlight.body} />

        <div className={styles.sectionsWrapper} data-testid="articleContent">
          {article.content.map((content, index) => {
            switch (content.type) {
              case 'plain': {
                return (
                  <div
                    key={`plain-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <PlainSection title={content.title} body={content.body} />
                  </div>
                );
              }
              case 'image': {
                return (
                  <Image key={`image-${index}`} sources={content.sources} />
                );
              }
              case 'list': {
                return (
                  <div
                    key={`list-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <SectionList
                      title={content.title}
                      body={content.body}
                      subSections={content.subSections}
                    />
                  </div>
                );
              }
              case 'listWithBulletPoints': {
                return (
                  <div
                    key={`listWithBulletPoints-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <SectionListWithBulletPoints
                      title={content.title}
                      body={content.body}
                      subSections={content.subSections}
                    />
                  </div>
                );
              }
              default:
                return null;
            }
          })}
        </div>
      </article>
      <div className={styles.whatToReadNext_wrapper}>
        <h1
          data-testid="whatToReadNext_title"
          className={styles.whatToReadNext_title}
        >
          What to read next
        </h1>
        <div className={styles.whatToReadNextCards_wrapper}>
          {nextArticles.map((article) => {
            return (
              <ReadNextArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                readTime={article.infos.readTime}
                publishedDate={article.infos.publishedDate}
                text={article.shortDescription}
                readMoreUrl={article.readMoreUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Article;
