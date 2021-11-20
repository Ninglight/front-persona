import React from 'react';
import styles from './grid.module.css';
import { useTransition, animated } from 'react-spring';
import { GridProps } from '@components';

export const Grid = ({ items, Component, itemSize = 'sm' }: GridProps<any>): JSX.Element => {
    const transitions = useTransition(items, {
        key: (item, index) => index,
        from: (item, key) => ({ opacity: 0, delay: 150 * key, transform: 'translate3D(0, -1px, 0)' }),
        enter: (item, key) => ({ opacity: 1, delay: 150 * key, transform: 'translate3D(0, 0, 0)' }),
        leave: { opacity: 0 }
    });

    return (
        <div className={`${styles.grid} ${styles[`grid--${itemSize}`]}`}>
            {transitions((props, item) => (
                <animated.div style={props}>
                    <Component {...item} />
                </animated.div>
            ))}
        </div>
    );
};
