import { Link } from '@components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';

export const Footer = (): JSX.Element => {
    const { t } = useTranslation('common');
    return (
        <footer className={styles.footer}>
            <p>
                {t('FOOTER.START')}{' '}
                <Link href="https://cocomaterial.com/" target="_blank" rel="noreferrer">
                    {t('FOOTER.LINK')}
                </Link>{' '}
                {t('FOOTER.END')}
            </p>
        </footer>
    );
};
