import styles from './SectionLayout.module.scss'
export const SectionLayout = ({ id, children, bgVariant, direction }) => {
    return (
        <section className={`${styles.section} ${styles[bgVariant]}`} id={id}>
            <div className={`${styles.container} ${styles[direction]}`}>{children}</div>
        </section>
    )
}

// boton terciario necesario.