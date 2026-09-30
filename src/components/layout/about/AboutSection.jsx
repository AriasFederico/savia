import { Badge } from '../../ui';
import { SectionLayout } from '../';
import styles from './AboutSection.module.scss';
import { about_section } from './about_section';

export const AboutSection = () => {
  return (
    <SectionLayout bgVariant={'soft'} id={'about'}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.media}>
            <img src={about_section.image} className={styles.image} alt='' />
          </div>
          <div className={styles.content}>
            <Badge text={about_section.badge} />
            <h2 className={styles.title}>{about_section.title}</h2>
            <div className={styles.about}>
              {about_section.about?.map((item, index) => (
                <p key={index} className={styles.paragraph}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/*  */}

        <div className={styles.certificates}>
          {about_section?.items?.map((item, index) => (
            <p key={index} className={styles.item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
