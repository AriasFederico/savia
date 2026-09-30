import { Badge } from '../../ui';
import { office_section, SectionLayout } from '..';
import styles from './OfficeSection.module.scss';

export const OfficeSection = () => {
  return (
    <SectionLayout bgVariant={'soft'} id={'office'}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge text={office_section.badge} />
          <h2 className={styles.title}>{office_section.title}</h2>
          <p className={styles.subtitle}>{office_section.subtitle}</p>
        </div>

        <div className={styles.media}>
          <img src={office_section.image} alt='' className={styles.image} />
        </div>
      </div>
    </SectionLayout>
  );
};
