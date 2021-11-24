import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './cover.module.css';
import CoverIllustration from '../../../public/assets/cover.svg';
import { Col, Row, Title } from '@components';

export const Cover = (): JSX.Element => {
    return (
        <Row id="cover" className={styles.cover} reverse={true}>
            <Col size={2} className={styles.content}>
                <>
                    <p className={styles.catchphrase}>Développeur front-end créatif</p>
                    <Title level={1} className={styles.title}>
                        Je pense, design et crée des <span className={styles.highlight}>émotions</span> pour le web
                    </Title>
                    <p className={styles.description}>
                        J’ai toujours était passionné par le web et sa valeur en tant qu’outil universel. En tant qu’artisan du web, j’ai étoffé mon
                        savoir-faire en décortiquant cet outil sous tous ses coutures durant les 8 dernières années : UI/UX Design, Développement Front-end,
                        Développement Back-end et la gestion de projet informatique.
                    </p>
                </>
            </Col>
            <Col size={1} className={styles.illustration}>
                <CoverIllustration />
            </Col>
        </Row>
    );
};
