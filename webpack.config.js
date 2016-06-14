module.exports = {
  entry: './lib/selectorMenu.js',
  output: {
    filename: './dist/vjs-selector-menu.min.js',
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
