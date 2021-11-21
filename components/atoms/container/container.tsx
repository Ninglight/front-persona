import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './container.module.css';

export const Container = ({ children }): JSX.Element => {
    return (
        <main className={styles.container}>
            <div className={styles.background}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div>{children}</div>
        </main>
    );
};
