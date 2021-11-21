import React from 'react';
import styles from './footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            © valentinbourreau.com. merci à{' '}
            <a href="https://cocomaterial.com/" target="_blank" rel="noreferrer">
                coco material
            </a>{' '}
            pour les illustrations 🤍
        </footer>
    );
};
