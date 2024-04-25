import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import CardInfos from '../CardInfos/CardInfos';

import styles from './ArticleCard.module.css';

type ArticleCardProps = {
  image: string;
  title: string;
  readTime: string;
  publishedDate: string;
  shortDescription: string;
  readMoreUrl: string;
};

const ArticleCard = ({
  image,
  title,
  readTime,
  publishedDate,
  shortDescription,
  readMoreUrl,
}: ArticleCardProps) => {
  return (
    <div>
      <article className={styles.articleCard} data-testid="article-card">
        <div className={styles.cardImage}>
          <img src={image} alt="article-image" />
        </div>
        <div className={styles.articleContent}>
          <div className={styles.article}>
            <h1
              className={styles.articleTitle}
              data-testid="article-card-title"
            >
              {title}
            </h1>
            <CardInfos readTime={readTime} publishedDate={publishedDate} />
            {/* You can change how many lines the cards will display at line=() below */}

            <TextTruncate line={3} element="p" text={shortDescription} />
          </div>
          <Link to={readMoreUrl} role="button" className={styles.btnReadMore}>
            READ MORE
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
