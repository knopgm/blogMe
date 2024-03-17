import styles from './PlainSection.module.css';

type PlainSectionProps = {
  title?: string;
  body: string;
};

const PlainSection = ({ title, body }: PlainSectionProps) => {
  return (
    <section className={styles.wrapper}>
      {title && <h2>{title}</h2>}
      <p className={styles.bodyWrapper}>{body}</p>
    </section>
  );
};

export default PlainSection;
