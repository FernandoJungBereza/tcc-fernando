const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = {
    ...nextConfig,
    images: {
        domains: ["downloadcursos.top", 'static.vecteezy.com', 'bluecresttraining.com', 'www.shutterstock.com', 'i.pinimg.com'],
    },
};
