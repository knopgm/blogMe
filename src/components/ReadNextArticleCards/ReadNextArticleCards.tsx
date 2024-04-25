import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';
import CardInfos from '../CardInfos/CardInfos';

import styles from './ReadNextArticleCard.module.css';

type ReadNextArticleCardProps = {
  image: string;
  title: string;
  readTime: string;
  publishedDate: string;
  text: string;
  readMoreUrl: string;
};

const ReadNextArticleCard = ({
  image,
  title,
  readTime,
  publishedDate,
  text,
  readMoreUrl,
}: ReadNextArticleCardProps) => {
  return (
    <article className={styles.readNextCard} data-testid="article-card">
      <div className={styles.readNextCardImage}>
        <img src={image} alt="article-image" />
      </div>
      <div className={styles.readNextCardContent}>
        <div className={styles.readNextCardContent_grid}>
          <h1 className={styles.readNextCardTitle}>{title}</h1>
          <CardInfos readTime={readTime} publishedDate={publishedDate} />
          {/* You can change how many lines the cards will display at line=() below */}
          <TextTruncate line={4} element="p" text={text} />
        </div>
        <div className={styles.readNextCardBtnReadMore_wrapper}>
          <Link
            to={readMoreUrl}
            role="button"
            className={styles.readNextCardBtnReadMore}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ReadNextArticleCard;
