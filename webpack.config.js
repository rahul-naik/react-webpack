const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    resolve(__dirname, 'src', 'js/index'),
  ],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        use: [
          'url-loader?limit=1024&name=images/[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['file-loader?name=src/fonts/[name].[ext]']
      },
      {
        test: /\.(json)$/,
        use: ['file-loader?name=[name].[ext]']
      },
      { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=src/fonts/[name].[ext]' },
      { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=src/fonts/[name].[ext]' },
      { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=src/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=src/fonts/[name].[ext]' },
      { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=src/fonts/[name].[ext]' }

      // { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/build/images/[name].[ext]" }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: 'images' },
    ]),
  ]
}
