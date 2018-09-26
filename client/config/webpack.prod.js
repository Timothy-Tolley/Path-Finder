const webpack = require('webpack')
const merge = require('webpack-merge')
// const CompressionPlugin = require('CompressionPlugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
  ],
  externals: {
    // Use external version of React
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: false
})
