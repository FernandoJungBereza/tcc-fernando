const nextConfig = {
    reactStrictMode: true,
    ignoreDuringBuilds: true,
};

module.exports = {
    ...nextConfig,
    images: {
        domains: ["downloadcursos.top", 'static.vecteezy.com', 'bluecresttraining.com'],
    },
};
