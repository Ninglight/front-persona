import React from 'react';
import styles from './about.module.css';
import { Col, Link, Row, Skill, Title } from '@components';
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
            <Row className={styles.row}>
                <Col size={2}>
                    <Title level={2} className={styles.title}>
                        {t('ABOUT.DEV.TITLE')}
                    </Title>
                    <p className={styles.description}>{t('ABOUT.DEV.DESCRIPTION')}</p>
                    <Link className={styles.link} href="https://github.com/Ninglight" target="_blank">
                        {t('ABOUT.DEV.LINK')}
                    </Link>
                </Col>
            </Row>
            <Row verticalAlignement={RowAlignment.START}>
                <Col size={1} className={styles.element}>
                    <Skill logo={NewsIllustration} title={t('ABOUT.SKILLS.EDITORIAL.TITLE')} description={t('ABOUT.SKILLS.EDITORIAL.DESCRIPTION')} />
                </Col>
                <Col size={1} className={styles.element}>
                    <Skill logo={WebIllustration} title={t('ABOUT.SKILLS.APP.TITLE')} description={t('ABOUT.SKILLS.APP.DESCRIPTION')} />
                </Col>
            </Row>
            <Row verticalAlignement={RowAlignment.START}>
                <Col size={1} className={styles.element}>
                    <Skill logo={MobileIllustration} title={t('ABOUT.SKILLS.MOBILE.TITLE')} description={t('ABOUT.SKILLS.MOBILE.DESCRIPTION')} />
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col size={2} offset={1}>
                    <div className={styles.illustration}>
                        <ArtIllustration />
                    </div>
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
                </Col>
            </Row>
            <Row className={styles.row} reverse={true}>
                <Col size={2}>
                    <div className={styles.illustration}>
                        <AgileIllustration />
                    </div>
                    <Title level={2} className={styles.title}>
                        {t('ABOUT.PROJECT.TITLE')}
                    </Title>
                    <p className={styles.description}>{t('ABOUT.PROJECT.DESCRIPTION')}</p>
                </Col>
            </Row>
        </section>
    );
};
