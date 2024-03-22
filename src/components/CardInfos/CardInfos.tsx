import elipse from './images/Ellipse.svg';

import styles from './CardInfos.module.css';

type CardInfosProps = {
  readTime: string;
  publishedDate: string;
};

const CardInfos = ({ readTime, publishedDate }: CardInfosProps) => {
  return (
    <div className={styles.CardInfo} data-testid="article-infos">
      <p className={styles.info_readTime}>
        <span className={styles.span_dot}>
          <img src={elipse} className={styles.elipse} alt="" />
          {readTime} {` read`}
        </span>
      </p>
      <p className={styles.info_publishedDate}>
        <span className={styles.span_dot}>
          <img src={elipse} className={styles.elipse} alt="" />
          {publishedDate}
        </span>
      </p>
    </div>
  );
};

export default CardInfos;
