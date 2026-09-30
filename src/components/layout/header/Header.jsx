import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

import { ButtonCta } from '../../ui/button_cta/ButtonCta';
import styles from './Header.module.scss';
import { header_data } from './header_data';

export const Header = ({ buildWaLink }) => {
  const { nav_links, logo, cta } = header_data;
  const [isOpen, setIsOpen] = useState(false);
  const BurgerIcon = isOpen ? LuX : LuMenu;
  const ctaHref = buildWaLink ? buildWaLink(cta.href) : cta.href;
  // Ambas instancias comparten configuración; CSS muestra la móvil o la de escritorio.
  const ctaProps = {
    size: cta.size,
    icon: cta.icon,
    label: cta.label,
    variant: cta.variant,
    href: ctaHref,
  };

  useEffect(() => {
    // Mantener este breakpoint sincronizado con el mixin `desktop` de Header.module.scss.
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeMenuOnDesktop = ({ matches }) => {
      if (matches) setIsOpen(false);
    };

    closeMenuOnDesktop(desktopQuery);
    desktopQuery.addEventListener('change', closeMenuOnDesktop);

    return () => desktopQuery.removeEventListener('change', closeMenuOnDesktop);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* La inicial del nombre queda visible; `alt` aporta el nombre accesible del enlace. */}
        <a
          href={logo?.href ?? '/'}
          className={styles.logo}
          onClick={() => setIsOpen(false)}
          aria-label={logo?.alt ?? logo?.name}
        >
          <p className={styles.avatar}>{logo?.name?.charAt(0)}</p>
          <div className={styles.flex}>
            <p className={styles.name}>{logo?.name}</p>
            <span className={styles.span}>{logo?.span}</span>
          </div>
        </a>

        {/* El botón hamburguesa referencia este id mediante aria-controls. */}
        <nav
          id='header-navigation'
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-label='Navegación principal'
        >
          {nav_links.map((link) => (
            <a
              key={link.id ?? link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.ctaMobile}>
            <ButtonCta {...ctaProps} onClick={() => setIsOpen(false)} />
          </div>
        </nav>

        <div className={styles.cta}>
          <ButtonCta {...ctaProps} />
        </div>

        <button
          className={styles.burger}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={'Menú principal'}
          aria-expanded={isOpen}
          aria-controls='header-navigation'
          type='button'
        >
          <span className={styles.burgerIcon} aria-hidden='true'>
            <BurgerIcon size={16} />
          </span>
        </button>
      </div>
    </header>
  );
};
