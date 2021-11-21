import React from 'react';
import { WorkProps } from './work.model';
import styles from './work.module.css';
import Image from 'next/image';
import LogoIllustration from '../../../public/assets/works/bicloon.svg';
import background from '../../../public/assets/works/bicloon.jpg';

export const Work = ({ className }: WorkProps): JSX.Element => {
    return (
        <div className={`${styles.work} ${className}`}>
            <div className={styles.background}>
                <Image src={background} alt="bicloon background" />
            </div>
            <div className={styles.logo}>
                <LogoIllustration />
            </div>
            <div className={styles.content}>
                <p className={styles.expertises}>UX DESIGN, UI DESIGN</p>
                <p className={styles.title}>Une appli de location de vélo et guide touristique sur Nantes</p>
            </div>
        </div>
    );
};
