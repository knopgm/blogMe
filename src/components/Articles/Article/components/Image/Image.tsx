import styles from './Image.module.css';

type ImageProps = {
  sources: {
    desktop: string;
    mobile: string;
  };
};

const Image = ({ sources }: ImageProps) => {
  return (
    <div className={styles.wrapper}>
      <picture>
        <source srcSet={sources.desktop} media="(min-width: 600px)" />
        <source srcSet={sources.mobile} media="(max-width: 600px)" />
        <img src={sources.desktop} alt="" />
      </picture>
    </div>
  );
};

export default Image;
