import React from 'react';
import { NextSeo } from 'next-seo';
import { useSpring, animated } from 'react-spring';
import { Button, Container, Footer, Header, Title } from '@components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import ErrorIllustration from '../public/assets/500.svg';

const Custom500 = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const { t } = useTranslation('common');

    return (
        <animated.div style={container}>
            <NextSeo title="valentinbourreau" noindex={true} />
            <Container theme="none">
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
                    <ErrorIllustration />
                    <div
                        style={{
                            margin: '30px 0 10px 0'
                        }}>
                        <Title level={1}>
                            <span dangerouslySetInnerHTML={{ __html: t('ERRORS.500') }} />
                        </Title>
                    </div>

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

export default Custom500;
