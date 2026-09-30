import styles from './HeroLayout.module.scss'
export const HeroLayout = ({ children, bgVariant, bgImage }) => {
    return (
        <main className={`${styles.heroLayout} ${styles[bgVariant]} ${bgImage ? styles.bgImage : ''}`}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    )
}
