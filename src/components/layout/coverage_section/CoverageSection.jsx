import { Badge } from '../../ui';
import { coverage_section, SectionLayout } from '..';
import styles from './CoverageSection.module.scss';

export const CoverageSection = () => {
  return (
    <SectionLayout bgVariant={'main'} id={'coverage'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={coverage_section.badge} />
          <h2 className={styles.title}>{coverage_section.title}</h2>
          <p className={styles.subtitle}>{coverage_section.subtitle}</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {[false, true].map((isDuplicate) => (
              <div
                className={styles.group}
                key={isDuplicate ? 'duplicate' : 'original'}
                aria-hidden={isDuplicate || undefined}
              >
                {coverage_section?.items?.map((item, index) => (
                  <div className={styles.item} key={`${item}-${index}`}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
