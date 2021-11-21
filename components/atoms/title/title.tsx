import React from 'react';
import { TitleProps } from './title.model';
import styles from './title.module.css';

export const Title = ({ className, level, children }: TitleProps): JSX.Element => {
    return React.createElement(
        `h${level}`,
        {
            className: `${styles.title} ${className}`
        },
        children
    );
};
