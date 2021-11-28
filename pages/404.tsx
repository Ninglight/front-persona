import React from 'react';
import { NextSeo } from 'next-seo';
import { useSpring, animated } from 'react-spring';
import { Button, Container, Footer, Header, Link, Title } from '@components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Custom404 = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const { t } = useTranslation('common');

    return (
        <animated.div style={container}>
            <NextSeo title="valentinbourreau" noindex={true} />
            <Container>
                <Header />
                <main
                    style={{
                        minHeight: 'calc(100vh - var(--gui-header-height) - var(--gui-footer-height))',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                    <Title level={1}>{t('ERRORS.404')}</Title>
                    <Link href={'/'}>
                        <a>
                            <Button>{t('ERRORS.BACK')}</Button>
                        </a>
                    </Link>
                </main>
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
