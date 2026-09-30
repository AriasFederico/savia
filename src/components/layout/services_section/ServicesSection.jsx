import { Badge, ServiceCard } from '../../ui';
import { SectionLayout, services_section } from '..';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ buildWaLink }) => {
  return (
    <SectionLayout bgVariant={'main'} id={'services'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={services_section.badge} />
          <h2 className={styles.title}>{services_section.title}</h2>
          <p className={styles.subtitle}>{services_section.subtitle}</p>
        </div>

        <div className={styles.items}>
          {services_section?.items?.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              buildWaLink={buildWaLink}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
