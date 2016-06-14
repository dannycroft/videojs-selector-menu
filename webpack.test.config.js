var path = require('path');

module.exports = {
  entry: {
    spec: './test/selectorMenu.test.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'test'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
};
