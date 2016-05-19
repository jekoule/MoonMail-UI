const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development ')
    })
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss() {
    return [precss, autoprefixer];
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: 'public'
  }
};
