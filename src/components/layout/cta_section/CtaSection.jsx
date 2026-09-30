import { Badge, ButtonCta } from '../../ui';
import { cta_section, SectionLayout } from '..';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ buildWaLink }) => {
  const { cta } = cta_section;
  const href = buildWaLink ? buildWaLink(cta.href) : cta.href;

  return (
    <SectionLayout bgVariant={'main'} id={'contact'}>
      <div className={styles.container}>
        <Badge text={cta_section.badge} />
        <h2 className={styles.title}>{cta_section.title}</h2>
        <p className={styles.subtitle}>{cta_section.subtitle}</p>
        <ButtonCta {...cta} href={href} />
      </div>
    </SectionLayout>
  );
};
