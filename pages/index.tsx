import React from 'react';
import { Header, Footer, Cover, Container, About, Contact, Works } from 'components';
import { useSpring, animated } from 'react-spring';
import { NextSeo } from 'next-seo';
import withApollo from '../lib/utils/apollo';
import { gql, useQuery } from '@apollo/client';

const Index = (): JSX.Element => {
    const container = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const librairyProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const documentationProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 });
    const starterProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 });

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

export default Index;
