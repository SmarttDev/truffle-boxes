const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

const nextConfig = {
  webpack: (config, { isServer }) => {
    // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );

    config.resolve.modules.push(__dirname);

    return config;
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: "default",
          quality: 90,
        },
      },
    ],
  ],
  nextConfig
);
