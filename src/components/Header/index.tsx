import styles from './Header.module.css';

type HeaderProps = {
    logoImage: string;
    logoAlt: string;
    logoTextImage: string;
    logoTextAlt: string;
}

export function Header({ logoImage, logoAlt, logoTextImage, logoTextAlt }: HeaderProps) {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.logoContainer}>
                <img src={logoImage} alt={logoAlt} />
                <img src={logoTextImage} alt={logoTextAlt} />
            </div>
        </header>
    )
}