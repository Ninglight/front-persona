import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ColProps } from './col.model';
import styles from './col.module.css';

export const Col = ({ size = 3, children, className, offset = 0 }: ColProps): JSX.Element => {
    return (
        <div className={`${styles.col} ${className || ''}`} data-size={size} data-offset={offset}>
            {children}
        </div>
    );
};
