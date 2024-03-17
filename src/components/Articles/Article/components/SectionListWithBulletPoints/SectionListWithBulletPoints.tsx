import styles from './SectionListWithBulletPoints.module.css';

type SectionListWithBulletPointsProps = {
  title?: string;
  body?: string;
  subSections: Array<{
    title: string;
    body: string;
  }>;
};

const SectionListWithBulletPoints = ({
  title,
  body,
  subSections,
}: SectionListWithBulletPointsProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>

      <ul className={styles.subSectionItems}>
        {subSections.map((subSectionItem) => {
          return (
            <li key={subSectionItem.title}>
              <section className={styles.subSectionItem}>
                <h3 className={styles.subSectionItem__title}>
                  {subSectionItem.title}
                </h3>

                <span>
                  <span className={styles.subSectionItem__body__firstLetter}>
                    {subSectionItem.body[0]}
                  </span>
                  <span>
                    {subSectionItem.body.substring(
                      1,
                      subSectionItem.body.length
                    )}
                  </span>
                </span>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionListWithBulletPoints;
