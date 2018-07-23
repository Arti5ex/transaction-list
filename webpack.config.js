'use strict';

var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // context: __dirname + '/src',
  entry: [
    'babel-polyfill',
    // 'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  output: { 
    path: path.join(__dirname, '/public/'), 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread'],
        }
      },
      { 
        test: /\.css$/, 
        // loader: "style-loader!css-loader",
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }, 
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};