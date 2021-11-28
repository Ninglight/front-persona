import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'lib/utils/apollo';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    return (
        <ApolloProvider client={apolloClient}>
            <div
                style={{
                    opacity: pageLoaded ? 1 : 0,
                    transition: '250ms'
                }}>
                <DefaultSeo {...pageProps.seo} />
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <base href="/" />
                </Head>
                <Component {...pageProps} key={router.asPath} />
            </div>
        </ApolloProvider>
    );
};

export default appWithTranslation(App);
