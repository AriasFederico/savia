import { iconMap } from '../../../data/iconMap';
import { Badge } from '../../ui';
import { SectionLayout, testimonials_section } from '..';
import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection = () => {
  const Quotes = iconMap.quote;
  return (
    <SectionLayout bgVariant={'soft'} id={'testimonials'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={testimonials_section.badge} />
          <h2 className={styles.title}>{testimonials_section.title}</h2>
          <p className={styles.subtitle}>{testimonials_section.subtitle}</p>
        </div>

        <div className={styles.items}>
          {testimonials_section?.items?.map(({ review, user }, index) => (
            <article className={styles.item} key={`${user}-${index}`}>
              <Quotes size={24} className={styles.icon} />
              <p className={styles.review}>{review}</p>
              <p className={styles.user}>{user}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
