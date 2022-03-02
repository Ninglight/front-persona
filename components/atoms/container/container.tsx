import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './container.module.css';

export const Container = ({ children, theme }): JSX.Element => {
    return (
        <main className={styles.container}>
            {theme === 'lined' && (
                <div className={styles.background}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            )}
            <div>{children}</div>
        </main>
    );
};
