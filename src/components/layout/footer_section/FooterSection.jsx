import { header_data } from '../header/header_data';
import { footer_section } from './footer_section';
import styles from './FooterSection.module.scss';

export const FooterSection = () => {
  const { logo, nav_links } = header_data;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <a
              href={logo.href}
              className={styles.logo}
              aria-label={logo.alt ?? logo.name}
            >
              <span className={styles.avatar}>{logo.name?.charAt(0)}</span>
              <span className={styles.logoText}>
                <span className={styles.name}>{logo.name}</span>
                <span className={styles.profession}>{logo.span}</span>
              </span>
            </a>
            <p className={styles.phrase}>{footer_section.phrase}</p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Navegación</h2>
            <nav className={styles.links} aria-label='Navegación del pie de página'>
              {nav_links?.map(({ id, label, href }) => (
                <a className={styles.link} href={href} key={id ?? href}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Redes sociales</h2>
            <nav className={styles.links} aria-label='Redes sociales'>
              {footer_section.social_links?.map(({ label, href }) => (
                <a className={styles.link} href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer_section.copyright}</p>
          <p className={styles.credit}>Diseño adaptable · Hecho por Codefex</p>
        </div>
      </div>
    </footer>
  );
};
