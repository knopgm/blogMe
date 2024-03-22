import shareIcon from './images/share_grey.svg';
import printIcon from './images/print.svg';
import { Container } from '../../../../Container/Container';

import styles from './HighlightedSection.module.css';

type HighlightedSectionProps = {
  body: string;
};

const HighlightedSection = ({ body }: HighlightedSectionProps) => {
  return (
    <section>
      <div className={styles.backgroundGrey_section}>
        <Container>
          <div
            className={styles.textIcon_wrapper}
            data-testid="article-highlighted"
          >
            <div className={styles.icons_wrapper}>
              <img
                role="button"
                src={shareIcon}
                className={styles.icons}
                alt=""
              />
              <img
                role="button"
                src={printIcon}
                className={styles.icons}
                alt=""
                onClick={() => window.print()}
              />
            </div>

            <div>
              <p>{body}</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HighlightedSection;
