import React from 'react';
import styles from './cover-wip.module.css';
import CoverIllustration from '../../../public/assets/cover.svg';
import { Col, Row, Typewriter, Title, Button, Link } from '@components';
import { useTranslation } from 'next-i18next';

export const CoverWip = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <Row id="cover" className={styles.cover} reverse={true}>
            <Col size={2} className={styles.content}>
                <>
                    <p className={styles.catchphrase}>{t('COVER.NAME')}</p>
                    <Title level={1} className={styles.title}>
                        <span dangerouslySetInnerHTML={{ __html: t('COVER.CATCHPHRASE') }}></span>
                    </Title>
                    <div className={styles.links}>
                        <Link href="https://www.linkedin.com/in/valentin-bourreau/" target="_blank">
                            <Button>Linkedin</Button>
                        </Link>
                        <Link href="https://github.com/Ninglight" target="_blank">
                            <Button>Github</Button>
                        </Link>
                        <Link href="https://dribbble.com/valentinbourreau" target="_blank">
                            <Button>Dribbble</Button>
                        </Link>
                        <Link href="https://www.behance.net/valentinbourreau" target="_blank">
                            <Button>Behance</Button>
                        </Link>
                    </div>
                </>
            </Col>
        </Row>
    );
};
