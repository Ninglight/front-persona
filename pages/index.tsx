import React from 'react';
import { Header, Footer, Cover, Container, About, Contact, Works } from 'components';
import { useSpring, animated } from 'react-spring';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

    return (
        <animated.div style={container}>
            <NextSeo title="valentinbourreau" />
            <Container>
                <Header />
                <main>
                    <Cover />
                    <About />
                    <Works />
                    <Contact />
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

export default Index;
