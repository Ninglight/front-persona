import React from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from '../../public/assets/logo.svg';
import styles from './header.module.css';

export const Header = (): JSX.Element => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.links}>
                <a className={`${styles.link} ${styles.active}`} href="#about">
                    À propos
                </a>
                <a className={styles.link} href="#works">
                    Travaux
                </a>
                <a className={styles.link} href="#contact">
                    Contact
                </a>
                <a className={styles.link} href="">
                    Format papier
                </a>
            </div>
        </header>
    );
};
