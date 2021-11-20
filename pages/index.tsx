import React from 'react';
import { Header, Footer, Cover, Container } from 'components';
import { useSpring, animated } from 'react-spring';
import { NextSeo } from 'next-seo';
import withApollo from '../lib/utils/apollo';
import { gql, useQuery } from '@apollo/client';

const Index = (): JSX.Element => {
    const librairyProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const documentationProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 });
    const starterProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 });

    return (
        <>
            <NextSeo title="CV" />
            <Container>
                <Header />
                <main>
                    <Cover />
                </main>
                <Footer />
            </Container>
        </>
    );
};

export default Index;
