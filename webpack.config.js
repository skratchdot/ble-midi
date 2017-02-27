/* eslint strict: 0 */
'use strict';

const HTTP_PORT = 8080;
const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/app/index.js'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/build/`
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `${pkg.name}: ${pkg.description}`
    })
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    port: HTTP_PORT
  }
};

module.exports = webpackConfig;
