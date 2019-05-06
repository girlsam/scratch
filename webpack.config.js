const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({production: isProduction = false} = {}) => {
  return {
    mode: 'production', // start script sets this to development
    devtool: 'inline-source-map',
    entry: "./src/index.js",
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [{loader: 'html-loader'}]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      publicPath: "/",
      hot: true,
      host: '0.0.0.0'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      alias: {
        Components: path.resolve(__dirname, './src/components/'),
        Css: path.resolve(__dirname, './src/css/')
      }
    },
    optimization: {
      // minimizer: [new TerserPlugin({})]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }
};
