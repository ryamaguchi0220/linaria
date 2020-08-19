const withCSS = require('@zeit/next-css')
const withImages = require('next-optimized-images')

module.exports = withImages(withCSS({
  optimizeImages: false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {loader: 'babel-loader'},
        {
          loader: require.resolve('../lib/loader'),
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })
    
    

    return config
  },
}))