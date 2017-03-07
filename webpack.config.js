const PATH = require('path');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const webpack = require('webpack');

const HTML_PLUGIN_CONFIG = new HTML_WEBPACK_PLUGIN({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	context: PATH.resolve('app'),
	entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

		'./index.js'
	],
  output: {
    filename: 'bundle.js',
    path: PATH.resolve('dist')
  },
  resolve: {
    extensions: ['.js'],
    modules: [PATH.resolve(__dirname, 'app'), PATH.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: 'node_modules',
      use: ['babel-loader']
    }]
  },
  devServer: {
    hot: true,
    // enable HMR on the server
    historyApiFallback: true,
    // respond to 404s with index.html
    contentBase: PATH.resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/'
    // match the output `publicPath`
  },
  plugins: [
    HTML_PLUGIN_CONFIG,
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates]
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
    ]
}