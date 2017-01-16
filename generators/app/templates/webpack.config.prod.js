const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.join(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    bundle: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '<%= bundleName %>.[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loaders: ['babel']
    },
    {
      test: /\.less$/,
      loaders: [
        'style-loader',
        'raw-loader',
        'postcss-loader',
        'less-loader'
      ]
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  resolve: {
    root: [
      nodeModulesPath
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};

module.exports = config;
