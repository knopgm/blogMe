import styles from './SectionList.module.css';

type SectionListProps = {
  title?: string;
  body?: string;
  subSections: Array<{
    title: string;
    body: string;
  }>;
};

const SectionList = ({ title, body, subSections }: SectionListProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>

      <div className={styles.subSectionItems}>
        {subSections.map((subSectionItem) => {
          return (
            <section
              key={subSectionItem.title}
              className={styles.subSectionItem}
            >
              <h3 className={styles.subSectionItem__title}>
                {subSectionItem.title}
              </h3>
              <p>{subSectionItem.body}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default SectionList;
