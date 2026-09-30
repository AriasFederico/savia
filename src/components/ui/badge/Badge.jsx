import { iconMap } from '../../../data/iconMap';
import styles from './Badge.module.scss';

export const Badge = ({
  text,
  iconLeft,
  iconRight,
  className = '',
  iconLeftClassName = '',
  iconRightClassName = '',
}) => {
  const IconLeft = iconMap[iconLeft];
  const IconRight = iconMap[iconRight];
  return (
    <div className={`${styles.badge} ${className}`}>
      {IconLeft && <IconLeft className={iconLeftClassName} />}
      <span className={styles.text}>{text?.toUpperCase()}</span>
      {IconRight && <IconRight className={iconRightClassName} />}
    </div>
  );
};
