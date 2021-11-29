import React from 'react';
import { NextSeo } from 'next-seo';
import { useSpring, animated } from 'react-spring';
import { Button, Col, Container, Footer, Header, Link, Row, Title } from '@components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ErrorIllustration from '../public/assets/404.svg';

const Custom404 = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const { t } = useTranslation('common');

    return (
        <animated.div style={container}>
            <NextSeo title="valentinbourreau" noindex={true} />
            <Container>
                <Header />
                <Row>
                    <Col size={1} offset={1}>
                        <main
                            style={{
                                minHeight: 'calc(100vh - var(--gui-header-height) - var(--gui-footer-height))',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                textAlign: 'left'
                            }}>
                            <ErrorIllustration />
                            <div
                                style={{
                                    margin: '30px 0 10px 0'
                                }}>
                                <Title level={1}>
                                    <span dangerouslySetInnerHTML={{ __html: t('ERRORS.404') }} />
                                </Title>
                            </div>

                            <Link href={'/'}>
                                <a>
                                    <Button>{t('ERRORS.BACK')}</Button>
                                </a>
                            </Link>
                        </main>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </animated.div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Custom404;
