import { iconMap } from '../../../data/iconMap';
import { ButtonCta } from '../';
import styles from './ServiceCard.module.scss';
export const ServiceCard = ({ icon, title, desc, cta, buildWaLink }) => {
  const Icon = iconMap[icon];
  return (
    <article className={styles.container}>
      <div className={styles.icon}>
        <Icon size={24} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>

      {cta && (
        <div className={styles.cta}>
          <ButtonCta
            variant='tertiary'
            icon={'arrowRight'}
            href={buildWaLink(cta)}
            label={'Consultar servicio'}
          />
        </div>
      )}
    </article>
  );
};
