import React from 'react';
import { NextSeo } from 'next-seo';

const Custom404 = (): JSX.Element => {
    return (
        <>
            <NextSeo noindex={true} />
            <main className="template-error ep-flex-column">404</main>
        </>
    );
};

export default Custom404;
