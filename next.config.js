const { i18n } = require('./next-i18next.config');

module.exports = {
    trailingSlash: true,
    generateBuildId: async () => {
        return 'my-build-id';
    },
    images: {
        deviceSizes: [576, 768, 992, 1200, 1344]
    },
    env: {
        NEXT_PUBLIC_STORYBLOK_TOKEN: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts)x?$/] },
            use: ['@svgr/webpack']
        });
        return config;
    },
    i18n
};
