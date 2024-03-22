import arrowLeft from './images/Arrow_Left_Circle.svg';
import CardInfos from '../../../../CardInfos/CardInfos';

import styles from './Hero.module.css';

type HeroProps = {
  title: string;
  readTime: string;
  date: string;
  imgdesktop: string;
  imgmobile: string;
};

const Hero = ({ title, readTime, date, imgdesktop, imgmobile }: HeroProps) => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.heroWhiteBackground_right}>
          <div className={styles.heroSizeWithIcons_wrapper}>
            <div className={styles.titleOrTextIcon_wrapper}>
              <div className={styles.icon_hero_wrapper}>
                <img
                  role="button"
                  src={arrowLeft}
                  className={styles.icons}
                  alt=""
                  onClick={() => {
                    window.history.back();
                  }}
                  data-testid="btn-goBack"
                />
              </div>
              <div className={styles.heroTitle_wrapper}>
                <h1 className={styles.heroTitle}>{title}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroImgcontainer}>
          <picture>
            <source srcSet={imgdesktop} media="(min-width: 600px)" />
            <source srcSet={imgmobile} media="(max-width: 600px)" />
            <img src={imgdesktop} className={styles.heroImg} alt="" />
          </picture>
        </div>
        <div className={styles.pageSize_wrapper}>
          <CardInfos readTime={readTime} publishedDate={date} />
        </div>
      </header>
    </>
  );
};

export default Hero;
