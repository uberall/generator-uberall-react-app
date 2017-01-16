const path = require('path');
const nodeModulesPath = path.join(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:<%= port %>', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:<%= port %>/',
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
      loaders: ['react-hot', 'babel']
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
  devtool: 'source-map',
  resolve: {
    root: [
      nodeModulesPath
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;
