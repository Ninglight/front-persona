import React from 'react';
import { LinkProps } from './link.model';
import styles from './link.module.css';

export const Link = ({ className, children, ...props }: LinkProps): JSX.Element => {
    return (
        <a {...props} className={`${styles.link} ${className}`}>
            {children}
        </a>
    );
};
