import React from 'react';
import { Container, CoverWip } from 'components';
import { useSpring, animated } from 'react-spring';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

    return (
        <animated.div style={container}>
            <NextSeo title="valentinbourreau" />
            <Container theme="none">
                <CoverWip />
            </Container>
        </animated.div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Index;
