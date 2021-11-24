import React from 'react';
import { RowProps } from './row.model';
import styles from './row.module.css';

export const Row = ({ className, children, id, reverse }: RowProps): JSX.Element => {
    return (
        <div id={id} className={`${styles.row} ${reverse ? styles.reverse : ''} ${className || ''}`}>
            {children}
        </div>
    );
};
