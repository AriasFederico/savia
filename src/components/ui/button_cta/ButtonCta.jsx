import { iconMap } from '../../../data/iconMap';
import styles from './ButtonCta.module.scss';

export const ButtonCta = ({
  label,
  icon,
  onClick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
}) => {
  // Si tiene 'href', es un enlace. Si no, es un botón.
  const Component = href ? 'a' : 'button';
  const Icon = iconMap[icon];

  return (
    <Component
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      type={!href ? type : undefined} // Solo para botones
    >
      {label}
      {icon && <Icon className={styles.icon} />}
    </Component>
  );
};
