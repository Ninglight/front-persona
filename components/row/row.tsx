import React from 'react';
import styles from './row.module.css';

export const Row = ({ className, children }): JSX.Element => {
    return <div className={`${styles.row} ${className}`}>{children}</div>;
};
