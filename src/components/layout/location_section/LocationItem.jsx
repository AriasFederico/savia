import { iconMap } from '../../../data/iconMap';
import styles from './LocationSection.module.scss';

export const LocationItem = ({ icon, title, info }) => {
  const Icon = iconMap[icon];

  return (
    <div className={styles.locationItem}>
      <div className={styles.iconContainer}>{Icon && <Icon size={24} />}</div>
      <div className={styles.flex}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemInfo}>{info}</p>
      </div>
    </div>
  );
};
