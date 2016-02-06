var webpack = require('webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'build/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url?limit=25000' },
        { test: /\.svg$/, exclude: /node_modules/, loader: 'file' },
    ],
  },
};
