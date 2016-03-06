'use strict';

const join = require('path').join;

module.exports = {
  entry: './source/client/index.tsx',

  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'public'),
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react!ts'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react'
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file',
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'babel?presets[]=react&presets[]=es2015!svg-react',
      // },
    ]
  }
};
