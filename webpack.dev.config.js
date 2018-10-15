const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js' 
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
    test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:  ["env","stage-0"],
          plugins: ["transform-decorators-legacy"]
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    open: true, //浏览器自动打开
    port: 9000
  }
}