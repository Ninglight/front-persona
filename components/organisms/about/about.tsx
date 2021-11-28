import React from 'react';
import styles from './about.module.css';
import { Col, Link, Row, Title } from '@components';
import WebIllustration from '../../../public/assets/web.svg';
import NewsIllustration from '../../../public/assets/news.svg';
import MobileIllustration from '../../../public/assets/mobile.svg';
import ArtIllustration from '../../../public/assets/art.svg';
import AgileIllustration from '../../../public/assets/agile.svg';
import { RowAlignment } from 'components/atoms/row/row.model';
import { useTranslation } from 'next-i18next';

export const About = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <section id="about" className={styles.about}>
            <Row className={styles.row} verticalAlignement={RowAlignment.START}>
                <>
                    <Col size={3} className={styles.content}>
                        <>
                            <Title level={2} className={styles.title}>
                                {t('ABOUT.DEV.TITLE')}
                            </Title>
                            <p className={styles.description}>{t('ABOUT.DEV.DESCRIPTION')}</p>
                            <Link className={styles.link} href="https://github.com/Ninglight" target="_blank">
                                {t('ABOUT.DEV.LINK')}
                            </Link>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <NewsIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                {t('ABOUT.SKILLS.EDITORIAL.TITLE')}
                            </Title>
                            <p className={styles.elementDescription}>{t('ABOUT.SKILLS.EDITORIAL.TITLE')}</p>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <WebIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                {t('ABOUT.SKILLS.APP.TITLE')}
                            </Title>
                            <p className={styles.elementDescription}>{t('ABOUT.SKILLS.APP.DESCRIPTION')}</p>
                        </>
                    </Col>
                    <Col size={1} className={styles.element}>
                        <>
                            <MobileIllustration />
                            <Title level={3} className={styles.elementTitle}>
                                {t('ABOUT.SKILLS.MOBILE.TITLE')}
                            </Title>
                            <p className={styles.elementDescription}>{t('ABOUT.SKILLS.MOBILE.DESCRIPTION')}</p>
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
                                {t('ABOUT.DESIGN.TITLE')}
                            </Title>
                            <p className={styles.description}>{t('ABOUT.DESIGN.DESCRIPTION')}</p>
                            <div className={styles.links}>
                                <Link className={styles.link} href="https://dribbble.com/valentinbourreau" target="_blank">
                                    {t('ABOUT.DESIGN.LINKS.DRIBBBLE')}
                                </Link>
                                <Link className={styles.link} href="https://www.behance.net/valentinbourreau" target="_blank">
                                    {t('ABOUT.DESIGN.LINKS.BEHANCE')}
                                </Link>
                            </div>
                        </>
                    </Col>
                </>
            </Row>
            <Row className={styles.row} reverse={true}>
                <>
                    <Col size={2}>
                        <>
                            <Title level={2} className={styles.title}>
                                {t('ABOUT.PROJECT.TITLE')}
                            </Title>
                            <p className={styles.description}>{t('ABOUT.PROJECT.TITLE')}</p>
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
