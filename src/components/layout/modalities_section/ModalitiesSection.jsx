import { Badge, ServiceCard } from '../../ui';
import { modalities_section, SectionLayout } from '..';
import styles from './ModalitiesSection.module.scss';

export const ModalitiesSection = () => {
  return (
    <SectionLayout bgVariant={'soft'} id={'modalities'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={modalities_section.badge} />
          <h2 className={styles.title}>{modalities_section.title}</h2>
          <p className={styles.subtitle}>{modalities_section.subtitle}</p>
        </div>

        <div className={styles.items}>
          {modalities_section?.items?.map((modalitie) => (
            <ServiceCard key={modalitie.title} {...modalitie} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
