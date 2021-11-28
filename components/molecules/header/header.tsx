import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from '../../../public/assets/logo.svg';
import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useTranslation } from 'react-i18next';

export const Header = (): JSX.Element => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState<string>();
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <a>
                    <Logo />
                </a>
            </Link>
            <div className={styles.actions}>
                <div className={styles.links}>
                    <a className={styles.link} href="#about">
                        {t('HEADER.LINKS.ABOUT')}
                    </a>
                    <a className={styles.link} href="#works">
                        {t('HEADER.LINKS.WORKS')}
                    </a>
                    <a className={styles.link} href="#contact">
                        {t('HEADER.LINKS.CONTACT')}
                    </a>
                    <a className={styles.link} href="">
                        {t('HEADER.LINKS.PAPER')}
                    </a>
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.intl}>
                    <Link href="/" locale="fr">
                        <a className={`${styles.link} ${router.locale === 'fr' ? styles.active : ''}`}>{t('HEADER.INTL.FR')}</a>
                    </Link>
                    <Link href="/" locale="en">
                        <a className={`${styles.link} ${router.locale === 'en' ? styles.active : ''}`}>{t('HEADER.INTL.EN')}</a>
                    </Link>
                </div>
            </div>
        </header>
    );
};
