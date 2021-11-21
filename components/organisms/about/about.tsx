import React from 'react';
import styles from './about.module.css';
import { Col, Link, Row, Title } from '@components';
import WebIllustration from '../../../public/assets/web.svg';
import NewsIllustration from '../../../public/assets/news.svg';
import MobileIllustration from '../../../public/assets/mobile.svg';
import ArtIllustration from '../../../public/assets/art.svg';
import AgileIllustration from '../../../public/assets/agile.svg';

export const About = (): JSX.Element => {
    return (
        <section id="about" className={styles.about}>
            <Row className={styles.row}>
                <>
                    <Col size={3} className={styles.content}>
                        <>
                            <Title level={2} className={styles.title}>
                                Je développe des interfaces pour de multiples supports
                            </Title>
                            <p className={styles.description}>
                                Après plusieurs années à me chercher et à trouver l’inspiration, j’ai trouvé un domaine qui me correspond par rapport à mes
                                aspirations personnels : le soucis du détail, l’empathie pour les utilisateurs, la logique et les belles réalisations. J’ai
                                découvert le poste de développeur front-end au moment de l’emergence des framework Javascript : React, Angular, Vue. J’ai pu
                                développer mes affinités avec React qui se basait principalement sur la notion de composants. Je me spécialise sur cette
                                technologie depuis ces deux dernières années.
                            </p>
                            <Link className={styles.link} href="">
                                Voir mon travail sur Github
                            </Link>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <WebIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                Application web / PWA
                            </Title>
                            <p className={styles.elementDescription}>
                                React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, symfony, webpack, angular, sass, JAMStack, les solutions clouds.
                            </p>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <NewsIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                Editorial website
                            </Title>
                            <p className={styles.elementDescription}>JAMStack, Gatsby, hugo, déploiement sur le cloud, prismic, ghost, CI/CD.</p>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <MobileIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                Mobile app
                            </Title>
                            <p className={styles.elementDescription}>React Native, ionic, expo.</p>
                        </>
                    </Col>
                </>
            </Row>
            <Row className={styles.row}>
                <>
                    <Col size={1} className={styles.illustration}>
                        <ArtIllustration />
                    </Col>
                    <Col size={2}>
                        <>
                            <Title level={2} className={styles.title}>
                                J’ai étudié l’UI et l’UX design durant 2 ans
                            </Title>
                            <p className={styles.description}>
                                Les interfaces ont toujours était le côté le plus jubilatoire de mon travail. Les principes de l’UX ont toujours été essentiel
                                dans la conception des projets auquel je participant. C’est dans l’optique d’approfondir cette reflexion que je me suis
                                réorrienté pour une seconde licence en UI/UX Design et en développement front-end. J’ai pu y exercé :Interview, tests
                                utilisateur, zoning, wireframing, prototyping, experience map, mobile first, atomic design, iconographie, support print.
                            </p>
                            <div className={styles.links}>
                                <a className={styles.link} href="">
                                    Voir mon travail sur Dribbble
                                </a>
                                <a className={styles.link} href="">
                                    Voir mon travail sur Behance
                                </a>
                            </div>
                        </>
                    </Col>
                </>
            </Row>
            <Row className={styles.row}>
                <>
                    <Col size={2}>
                        <>
                            <Title level={2} className={styles.title}>
                                J’ai besoin d’inventorisé, plannifié et suivre la vue d’ensemble d’un projet
                            </Title>
                            <p className={styles.description}>
                                Ma dernière année d’étude était centré sur la gestion de projet et m’a sensibilisé à la gestion d’une équipe, aux méthodologies
                                de gestion de projet (Agilité, scrum, extrem programming, lean software development), à la délégation et aux notions
                                financières.De plus, mon implication au sein de l’agence web Troopers, une entreprise libérée, m’a permit de mettre en pratique
                                la théorie apprise au sein de l’IMIE et découvrir les problématiques de gouvernance de divers typologies de projet.
                            </p>
                        </>
                    </Col>
                    <Col size={1} className={styles.illustration}>
                        <AgileIllustration />
                    </Col>
                </>
            </Row>
        </section>
    );
};
