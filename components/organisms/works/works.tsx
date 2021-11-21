import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './works.module.css';
import CoverIllustration from '../../../public/assets/cover.svg';
import { Col, Row, Title, Work } from '@components';

export const Works = (): JSX.Element => {
    return (
        <section id="works">
            <Row className={styles.cover}>
                <Col size={3} className={styles.illustration}>
                    <Title level={1} className={styles.title}>
                        J&apos;ai travaillé sur
                    </Title>
                </Col>
            </Row>
            <Row className={styles.cover}>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
                <Col size={1} className={styles.illustration}>
                    <Work />
                </Col>
            </Row>
        </section>
    );
};
