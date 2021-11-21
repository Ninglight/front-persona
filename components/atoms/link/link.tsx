import React from 'react';
import { LinkProps } from './link.model';
import styles from './link.module.css';

export const Link = ({ className, href, children }: LinkProps): JSX.Element => {
    return (
        <a href={href} className={`${styles.link} ${className}`}>
            {children}
        </a>
    );
};
