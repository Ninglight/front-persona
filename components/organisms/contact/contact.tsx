import React from 'react';
import styles from './contact.module.css';
import { Col, Link, Row, Title, Button } from '@components';
import ContactIllustration from '../../../public/assets/contact.svg';

export const Contact = (): JSX.Element => {
    return (
        <section id="contact" className={styles.contact}>
            <Row>
                <>
                    <Col size={2}>
                        <>
                            <Title level={2} className={styles.title}>
                                Laissez moi un message pour tous les raisons, mais des bonnes
                            </Title>
                            <Link href="">
                                <Button>Délivrer un message</Button>
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
