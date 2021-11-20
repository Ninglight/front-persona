import React from 'react';
import { NextSeo } from 'next-seo';

const Custom500 = (): JSX.Element => {
    return (
        <>
            <NextSeo noindex={true} />
            <main className="template-error ep-flex-column">500</main>
        </>
    );
};

export default Custom500;
