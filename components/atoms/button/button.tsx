import React from 'react';
import { ButtonProps } from './button.model';
import styles from './button.module.css';

export const Button = ({ className, children }: ButtonProps): JSX.Element => {
    return <button className={`${styles.button} ${className}`}>{children}</button>;
};
