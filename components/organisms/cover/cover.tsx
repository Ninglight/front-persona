import React from 'react';
import styles from './cover.module.css';
import CoverIllustration from '../../../public/assets/cover.svg';
import { Col, Row, Typewriter, Title } from '@components';
import { useTranslation } from 'next-i18next';

export const Cover = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <Row id="cover" className={styles.cover} reverse={true}>
            <Col size={2} className={styles.content}>
                <>
                    <p className={styles.catchphrase}>{t('COVER.CATCHPHRASE')}</p>
                    <Title level={1} className={styles.title}>
                        {t('COVER.TITLE.START')}
                        <br />
                        <span className={styles.highlight}>
                            <Typewriter
                                texts={[t('COVER.TITLE.KEYWORDS.1'), t('COVER.TITLE.KEYWORDS.2'), t('COVER.TITLE.KEYWORDS.3'), t('COVER.TITLE.KEYWORDS.4')]}
                            />
                        </span>{' '}
                        {t('COVER.TITLE.END')}
                    </Title>
                    <p className={styles.description}>{t('COVER.DESCRIPTION')}</p>
                </>
            </Col>
            <Col size={1} className={styles.illustration}>
                <CoverIllustration />
            </Col>
        </Row>
    );
};
