import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './cover.module.css';
import CoverIllustration from '../../public/assets/cover.svg';
import { Col, Row } from '@components';

export const Cover = (): JSX.Element => {
    return (
        <Row className={styles.cover}>
            <Col size={2} className={styles.content}>
                <>
                    <p className={styles.catchphrase}>Développeur front-end créatif</p>
                    <h1 className={styles.title}>
                        Je pense, design et crée des <span className={styles.highlight}>émotions</span> pour le web
                    </h1>
                    <p className={styles.description}>
                        Je suis un jeune développeur front-end, à la recherche de mon premier emploi. J’ai toujours était passionné par le web et sa valeur en
                        tant qu’outil universel. En tant qu’artisan du web, j’ai étoffé mon savoir-faire en décortiquant cet outil sous tous ses coutures durant
                        les 6 dernières années : UI/UX Design, Développement Front-end, Développement Back-end et la gestion de projet infomatique.
                    </p>
                </>
            </Col>
            <Col size={1} className={styles.illustration}>
                <CoverIllustration />
            </Col>
        </Row>
    );
};
