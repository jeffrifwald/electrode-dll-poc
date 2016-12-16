'use strict';

const path = require('path');

const webpack = require('webpack');


module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    lodash: ['lodash']
  },
  output: {
    filename: '[name].js',
    library: '[name]_[hash]',
    path: path.join(__dirname, 'dist/js')
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist/dll/[name].json')
    })
  ]
};
