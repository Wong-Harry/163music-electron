const webpack = require('webpack')
module.exports = {
  publicPath: './',
  // outputDir: process.env.outputDir,
  configureWebpack: {
    plugins: [new webpack.BannerPlugin(new Date().toLocaleString())]
  }
}
