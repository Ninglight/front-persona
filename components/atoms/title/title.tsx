import { ThemeContext } from '@components';
import React from 'react';
import { TitleProps } from './title.model';
import styles from './title.module.css';

export const Title = ({ className, level, children }: TitleProps): JSX.Element => {
    const { theme } = React.useContext(ThemeContext);
    console.log('theme', theme)
    
    return React.createElement(
        `h${level}`,
        {
            className: `${styles.title} ${styles[theme.color]} ${className}`
        },
        children
    );
};
