
var path = require('path');
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetsPath = path.resolve(__dirname, '..', 'static', 'dist');
var host = 'localhost';
var port = 8080;
var http = 'http';
var baseAddress = http + '://' + host + (http !== 'https' && port ? (':' + port) : '') + '/';


module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: [
   'webpack-hot-middleware/client?path=' + baseAddress + '__webpack_hmr',
    '../src/client.js'

    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    // './src/client'
  ],
  output: {
    // path: path.resolve(__dirname, 'static', 'build'),
    // publicPath: '/build/',
    // filename: "bundle.js"
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: baseAddress
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'static', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, 
      {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
