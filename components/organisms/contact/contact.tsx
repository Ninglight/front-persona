import React from 'react';
import styles from './contact.module.css';
import { Col, Link, Row, Title, Button } from '@components';
import ContactIllustration from '../../../public/assets/contact.svg';
import { useTranslation } from 'next-i18next';

export const Contact = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <section id="contact" className={styles.contact}>
            <Row reverse={true}>
                <>
                    <Col size={2}>
                        <>
                            <Title level={2} className={styles.title}>
                                {t('CONTACT.TITLE')}
                            </Title>
                            <Link href="">
                                <Button>{t('CONTACT.LINK')}</Button>
                            </Link>
                        </>
                    </Col>
                    <Col size={1} className={styles.illustration}>
                        <ContactIllustration />
                    </Col>
                </>
            </Row>
        </section>
    );
};
