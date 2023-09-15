/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    config.experiments = { asyncWebAssembly: true, layers: true };

    return config;
  },
};

module.exports = nextConfig;
