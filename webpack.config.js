const PATH = require('path');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

const HTML_PLUGIN_CONFIG = new HTML_WEBPACK_PLUGIN({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	context: PATH.resolve('app'),
	entry: {
		javascript: './index.js'
	},
  output: {
    filename: 'bundle.js',
    path: PATH.resolve('dist')
  },
  resolve: {
    extensions: ['js'],
    modules: [PATH.resolve(__dirname, 'app'), PATH.resolve(__dirname, 'node_modules')]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: 'node_modules',
      loader: 'babel-loader'
    }]
  },
  plugins: [HTML_PLUGIN_CONFIG]
}