const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'my.bundle.js'
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|tif|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    

    ],
  },

};

