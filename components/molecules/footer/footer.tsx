import { Link } from '@components';
import React from 'react';
import styles from './footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <p>
                © valentinbourreau.com. merci à{' '}
                <Link href="https://cocomaterial.com/" target="_blank" rel="noreferrer">
                    coco material
                </Link>{' '}
                pour les illustrations 🤍
            </p>
        </footer>
    );
};
