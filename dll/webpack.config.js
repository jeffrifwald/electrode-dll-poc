'use strict';

const path = require('path');

const webpack = require('webpack');


module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    lodash: ['lodash']
  },
  output: {
    filename: 'js/[name].js',
    library: '[name]_[hash]',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist/dll/[name]-manifest.json')
    })
  ]
};
