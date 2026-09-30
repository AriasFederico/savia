import { Badge } from '../../ui';
import { location_section, SectionLayout } from '..';
import { GoogleMap } from './GoogleMap';
import { LocationItem } from './LocationItem';
import styles from './LocationSection.module.scss';

export const LocationSection = () => {
  return (
    <SectionLayout bgVariant={'main'} id={'location'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={location_section.badge} />
          <h2 className={styles.title}>{location_section.title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            {location_section?.items?.map((item, index) => (
              <LocationItem key={`${item.title}-${index}`} {...item} />
            ))}
          </div>

          <div className={styles.map}>
            <GoogleMap coordinates={location_section.coordinates} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
