import { Badge, ButtonCta } from '../../ui';
import { HeroLayout } from '../hero_layout/HeroLayout';
import styles from './HeroSection.module.scss';
import { hero_data } from './hero_data';

export const HeroSection = () => {
  return (
    <HeroLayout bgVariant={'main'}>
      <div className={styles.container}>
        <Badge text={hero_data.badge} />
        <h1 className={styles.title}>{hero_data.title}</h1>
        <p className={styles.subtitle}>{hero_data.subtitle}</p>
        <div className={styles.ctas}>
          {hero_data?.ctas?.map(({ icon, label, size, variant, href }) => (
            <ButtonCta
              key={label}
              icon={icon}
              label={label}
              variant={variant}
              href={href}
            />
          ))}
        </div>

        <div className={styles.banner}></div>
      </div>
    </HeroLayout>
  );
};
